import {ReactNode} from "react";

export type StatConfig = {
    title: ReactNode
    value: string | number
}

export type StatBarConfig = {
    stats: StatConfig[]
}

type StatBarProps = {
    config: StatBarConfig
}

export const StatBar = ({config}: StatBarProps) => {
    return (
        <div className="stats bg-neutral rounded-none text-sm mb-2">
            {config.stats.map((stat, index) => (
                <div key={index} className="stat flex flex-row justify-center">
                    <div className="stat-title text-neutral-content">{stat.title}</div>
                    <div className="stat-value text-accent text-sm">{stat.value}</div>
                </div>
            ))}
        </div>
    )
}
