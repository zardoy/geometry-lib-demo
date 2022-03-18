import { Coordinate } from './coordinate'
import { BasicFigure } from './figure'

export interface CoordinateWithSize extends Coordinate {
    width: number
    height: number
}

export class Rectangular implements CoordinateWithSize, BasicFigure<Rectangular> {
    x!: number
    y!: number
    width!: number
    height!: number

    constructor(params: CoordinateWithSize) {
        Object.assign(this, params)
    }

    clone() {
        return new Rectangular(this)
    }

    isEquals(figureToCompare: Rectangular): boolean {
        return (
            figureToCompare.x === this.x &&
            figureToCompare.y === this.y &&
            figureToCompare.width === this.width &&
            figureToCompare.height === this.height
        )
    }

    getArea() {
        return this.width * this.height
    }

    getPathLength() {
        return this.width * 2 + this.height * 2
    }
}
