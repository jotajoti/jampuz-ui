import {Trans} from "@lingui/macro";

import {numberSort, stringSort, Table, TableDef} from "../components/table";
import {ArrayElement} from "../utils.ts";
import {GetEventQuery} from "../gql";

type CountriesTableProps = {
    data: GetEventQuery
}

export const CountriesTable = ({data}: CountriesTableProps) => {
    const countries = data!.event!.jidCodeStats!.countryStats;
    const countriesTable: TableDef<ArrayElement<typeof countries>> = {
        data: countries,
        defaultSortColumn: "count",
        columns: [{
            key: "code",
            header: <Trans>Country</Trans>,
            getValue: countryStat => countryStat.country,
            sort: stringSort(countryStat => countryStat.country),
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
