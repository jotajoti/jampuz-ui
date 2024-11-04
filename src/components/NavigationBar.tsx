import {ReactNode} from "react";

type NavigationBarProps = {
    start: ReactNode
    center?: ReactNode
    end?: ReactNode
}

export const NavigationBar = ({start, center, end}: NavigationBarProps) => {
    return (
        <div className="navbar bg-neutral text-neutral-content glass">
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
