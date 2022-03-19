import { Coordinate } from './coordinate'
import { BasicFigure } from './figure'

export interface CoordinateWithSize extends Coordinate {
    width: number
    height: number
}

export class Rectangular implements CoordinateWithSize, BasicFigure<Rectangular> {
    constructor(public x: number, public y: number, public width: number, public height: number) {}

    clone() {
        return new Rectangular(this.x, this.y, this.width, this.height)
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
