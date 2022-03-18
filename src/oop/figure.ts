export interface BasicFigure<T> {
    clone(): T
    isEquals(figureToCompare: T): boolean
}
