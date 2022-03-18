import { Coordinate } from './coordinate'
import { BasicFigure } from './figure'

export interface CoordinateWithRadius extends Coordinate {
    radius: number
}

export class Circle implements CoordinateWithRadius, BasicFigure<Circle> {
    constructor(public x: number, public y: number, public radius: number) {}

    clone(): Circle {
        return new Circle(this.x, this.y, this.radius)
    }

    isEquals(figureToCompare: Circle): boolean {
        return this.x === figureToCompare.x && this.y === figureToCompare.y && this.radius === figureToCompare.radius
    }

    getArea() {
        return Math.PI * this.radius ** 2
    }

    getArcLength() {
        return 2 * Math.PI * this.radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newValue) {
        this.radius = newValue / 2
    }
}
