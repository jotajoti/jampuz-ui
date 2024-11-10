import {CountriesFragmentDoc, FragmentType, useFragment} from "../../gql";
import {Map} from "../../components/map";

type CountriesMapProps = {
    countriesFragment: FragmentType<typeof CountriesFragmentDoc>
    maximized: boolean
}

export const CountriesMap = ({countriesFragment, maximized}: CountriesMapProps) => {
    const countries = useFragment(CountriesFragmentDoc, countriesFragment);

    return (
        <div>
            <Map detailed={maximized} countries={countries.jidCodeStats.countryStats.map(country => ({
                code: country.country.toUpperCase(),
                fill: "fill-accent",
            }))}/>
        </div>
    );
}