import { CoordinateArray } from './coordinate'
import { BasicFigure } from './figure'

export type TrianglePoints = [CoordinateArray, CoordinateArray, CoordinateArray]

export class Triangle implements BasicFigure<Triangle> {
    constructor(public points: TrianglePoints) {}

    clone(): Triangle {
        return new Triangle([...this.points.map(point => [...point])] as TrianglePoints)
    }

    isEquals(figureToCompare: Triangle): boolean {
        for (const i of [0, 1, 2]) for (const c of [0, 1]) if (this.points[i]![c]! !== figureToCompare.points[i]![c]) return false
        return true
    }

    getArea() {
        const { points: p } = this
        return Math.abs((p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1])) / 2
    }
}
