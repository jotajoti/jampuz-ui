import {Trans} from "@lingui/macro";

import {numberSort, stringSort, Table, TableDef} from "../../components/table";
import {ArrayElement, translateCountry} from "../../utils";
import {CountriesFragmentDoc, FragmentType, useFragment} from "../../gql";

type CountriesTableProps = {
    countriesFragmentDoc: FragmentType<typeof CountriesFragmentDoc>
}

export const CountriesTable = ({countriesFragmentDoc}: CountriesTableProps) => {
    const countriesFragment = useFragment(CountriesFragmentDoc, countriesFragmentDoc);

    const countries = countriesFragment.jidCodeStats!.countryStats;
    const countriesTable: TableDef<ArrayElement<typeof countries>> = {
        data: countries,
        defaultSortColumn: "count",
        columns: [{
            key: "code",
            header: <Trans>Country</Trans>,
            getValue: countryStat => translateCountry(countryStat.country),
            sort: stringSort(countryStat => translateCountry(countryStat.country)!.toString()),
            sortAscendingDefault: true,
            extraClassNames: "w-11/12"
        }, {
            key: "count",
            header: <Trans>Count</Trans>,
            getValue: countryStat => countryStat.uniqueCount,
            sort: numberSort(countryStat => countryStat.uniqueCount),
            sortAscendingDefault: false
        }]
    }

    return <Table tableDef={countriesTable}/>
}
