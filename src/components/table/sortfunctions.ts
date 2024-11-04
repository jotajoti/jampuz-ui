export type StringExtractor<T> = (row: T) => string
export const stringSort = <T>(extractor: StringExtractor<T>) =>
    (aRow: T, bRow: T): number => {
        const aValue = extractor(aRow);
        const bValue = extractor(bRow);

        return aValue.localeCompare(bValue);
    }

export type NumberExtractor<T> = (row: T) => number
export const numberSort = <T>(extractor: NumberExtractor<T>) =>
    (aRow: T, bRow: T): number => {
        const aValue = extractor(aRow);
        const bValue = extractor(bRow);

        return aValue - bValue;
    }
