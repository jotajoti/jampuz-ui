import {ReactNode, useState} from "react";
import {ArrowsPointingInIcon, ArrowsPointingOutIcon} from "@heroicons/react/24/solid";

export type WidgetContentFunction = (maximized: boolean) => ReactNode;

export type Widget = {
    key: string
    title: string
    content: ReactNode | WidgetContentFunction
    span?: 1 | 2 | 3 | 4
}

type WidgetComponentProps = {
    widget: Widget
    maximized: boolean
    toggleMaximize: () => void
}

const WidgetComponent = ({widget: {title, content, span}, maximized, toggleMaximize}: WidgetComponentProps) => {

    const renderContent = (): ReactNode => {
        if (typeof (content) === "function") {
            return (content as WidgetContentFunction)(maximized);
        } else {
            return content;
        }
    }

    const colSpan = (): string => {
        switch (span) {
            case 1:
                return " col-span-1";
            case 2:
                return " col-span-2";
            case 3:
                return " col-span-3";
            case 4:
                return " col-span-4";
            default:
                return "";
        }
    }

    return (
        <div className={`rounded border bg-base-100 flex-1${colSpan()}`}>
            <div className="p-4 pt-2 pb-2 border-b flex flex-row items-center bg-base-200 text-base-content glass">
                <div className="grow">{title}</div>
                <div>
                    {maximized
                        ? <ArrowsPointingInIcon className="size-5 link" onClick={toggleMaximize}/>
                        : <ArrowsPointingOutIcon className="size-5 link" onClick={toggleMaximize}/>
                    }
                </div>
            </div>
            <div className="p-4 pt-2 pb-2">{renderContent()}</div>
        </div>
    );
}

type DashboardProps = {
    widgets: Widget[]
    columns: 1 | 2 | 3 | 4
}

export const Dashboard = ({widgets, columns}: DashboardProps) => {

    const [selectedWidget, setSelectedWidget] = useState<Widget | null>(null);

    const gridColumns = (): string => {
        switch (columns) {
            case 1:
                return " grid-cols-1";
            case 2:
                return " grid-cols-2";
            case 3:
                return " grid-cols-3";
            case 4:
                return " grid-cols-4";
            default:
                return "";
        }
    }

    return (
        selectedWidget
            ? (
                <WidgetComponent key={selectedWidget.key}
                                 maximized={true}
                                 toggleMaximize={() => setSelectedWidget(null)}
                                 widget={selectedWidget}/>
            )
            : (
                <div className={`grid gap-4${gridColumns()}`}>
                    {
                        widgets.map(widget => {
                            return (
                                <WidgetComponent key={widget.key}
                                                 maximized={false}
                                                 toggleMaximize={() => setSelectedWidget(widget)}
                                                 widget={widget}/>
                            )
                        })
                    }
                </div>
            )
    );
}
