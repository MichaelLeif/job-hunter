export enum FilterTypes {
    CONFIDENCE = 'confidence',
    ALPHABETICAL = 'alphabetical',
    REVERSE_ALPHABETICAL = 'reverse-alphabetical',
}

export interface FilterTypeFunction {
    setFilter: (filter: FilterTypes) => void
}