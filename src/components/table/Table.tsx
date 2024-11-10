import {ReactNode, useMemo, useState} from "react";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";

export type ColumnDef<T> = {
    key: string
    header: ReactNode
    getValue: (row: T) => ReactNode
    sort: (rowA: T, rowB: T) => number
    sortAscendingDefault: boolean
    extraClassNames?: string
}

export type TableDef<T> = {
    columns: ColumnDef<T>[]
    defaultSortColumn: string
    data: T[]
    rowClassNames?: (row: T) => string
}

type TableProps<T> = {
    tableDef: TableDef<T>
}

export const Table = <T, >({tableDef}: TableProps<T>) => {
    const columnLookup = useMemo(() => tableDef.columns.reduce((lookupMap: { [key: string]: ColumnDef<T> }, column) => {
        lookupMap[column.key] = column
        return lookupMap
    }, {}), [tableDef.columns]);

    const [sortColumn, setSortColumn] = useState<string>(tableDef.defaultSortColumn);
    const [sortAscending, setSortAscending] = useState<boolean>(columnLookup[tableDef.defaultSortColumn].sortAscendingDefault);

    const onColumnSort = (column: string) => {
        if (sortColumn === column) {
            setSortAscending(!sortAscending);
        } else {
            setSortAscending(columnLookup[column].sortAscendingDefault);
        }
        setSortColumn(column);
    };

    return (
        <div className="overflow-x-auto max-h-[calc(100vh-17rem)]">
            <table className="table table-zebra table-sm table-pin-rows">
                <thead>
                <tr>
                    {tableDef.columns.map((column, columnIndex) => (
                        <th key={columnIndex} className={`link ${column.extraClassNames ? column.extraClassNames : ''}`}
                            onClick={() => onColumnSort(column.key)}>
                            <div className="flex flex-row">
                                {column.header}
                                {sortColumn === column.key
                                    ? (
                                        sortAscending ? (
                                            <ChevronDownIcon className="size-4"/>
                                        ) : (
                                            <ChevronUpIcon className="size-4"/>
                                        )
                                    )
                                    : (
                                        <div className="inline-block size-4"></div>
                                    )
                                }
                            </div>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableDef
                    .data
                    .sort((rowA, rowB) => {
                        const column = columnLookup[sortColumn];
                        let sort = column.sort(rowA, rowB);
                        if (!sortAscending) {
                            sort *= -1;
                        }
                        return sort;
                    })
                    .map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {tableDef.columns.map((column, columnIndex) => (
                                <td className={`${column.extraClassNames ? column.extraClassNames : ''} ${tableDef.rowClassNames ? tableDef.rowClassNames(row) : ''}`}
                                    key={columnIndex}>
                                    {column.getValue(row)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}