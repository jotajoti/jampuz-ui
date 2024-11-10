import {ReactNode} from "react";

type NavigationBarProps = {
    start: ReactNode
    center?: ReactNode
    end?: ReactNode
}

export const NavigationBar = ({start, center, end}: NavigationBarProps) => {
    return (
        // !backdrop-filter-none fixes a bug where the dropdown menu would be behind the content.
        <div className="navbar bg-neutral text-neutral-content glass !backdrop-filter-none">
            <div className="navbar-start">
                {start}
            </div>
            {center && (
                <div className="navbar-center">
                    {center}
                </div>
            )}
            {end && (
                <div className="navbar-end">
                    {end}
                </div>
            )}
        </div>
    )
}
