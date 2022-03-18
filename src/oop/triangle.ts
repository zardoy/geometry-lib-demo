import { CoordinateArray } from './coordinate'

export type TrianglePoints = [CoordinateArray, CoordinateArray, CoordinateArray]

export class Triangle {
    constructor(public points: TrianglePoints) {}

    getArea() {
        const { points: p } = this
        return Math.abs((p[1][0] - p[0][0]) * (p[2][1] - p[0][1]) - (p[2][0] - p[0][0]) * (p[1][1] - p[0][1])) / 2
    }
}
