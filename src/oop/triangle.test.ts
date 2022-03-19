import { Triangle, TrianglePoints } from './triangle'

const trianglePoints: TrianglePoints = [
    [0, 0],
    [0, 5],
    [5, 0],
]
test('getArea', () => {
    expect(new Triangle(trianglePoints).getArea()).toMatchInlineSnapshot('12.5')
})

test('clone', () => {
    const triangle1 = new Triangle(trianglePoints)
    const triangle2 = triangle1.clone()
    triangle2.points[2][0] = 50
    expect(triangle2.points[2][0]).not.toBe(triangle1.points[2][0])
})

test('isEquals', () => {
    const triangle1 = new Triangle(trianglePoints)
    const triangle2 = triangle1.clone()
    expect(triangle1.isEquals(triangle2)).toBeTruthy()
    triangle2.points[2][0] = 50
    expect(triangle1.isEquals(triangle2)).toBeFalsy()
})
