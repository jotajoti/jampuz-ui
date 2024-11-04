import {lazy, Suspense, useEffect, useState} from "react";

export type Country = {
    code: string
    fill: string
}

type MapProps = {
    countries: Country[]
    detailed: boolean
}

const WorldMap = lazy(() => import("./WorldMap.tsx"));
const WorldMapDetailed = lazy(() => import("./WorldMapDetailed.tsx"));

export const Map = ({countries, detailed}: MapProps) => {
    const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);

    useEffect(() => {
        if (svgElement != null) {
            countries.forEach((country) => {
                const countryPath = svgElement.getElementById(country.code);
                if (countryPath) {
                    countryPath.classList.add(country.fill);
                }
            });
        }
    }, [countries, svgElement, detailed]);

    return (
        <div className="fill-base-100 stroke-base-content stroke-1">
            <Suspense fallback={null}>
                {detailed ? <WorldMapDetailed ref={el => setSvgElement(el)} strokeWidth={0.5}/> :
                    <WorldMap ref={el => setSvgElement(el)}/>}
            </Suspense>
        </div>
    );
};
