import { Coordinate, CoordinateArray } from './coordinate'

export const coordinateArrayToObject = ([x, y]: CoordinateArray): Coordinate => ({ x, y })
export const coordinateObjectToArray = ({ x, y }: Coordinate): CoordinateArray => [x, y]
