import { Circle } from './circle'

test('getArea', () => {
    expect(Math.floor(new Circle(0, 0, 50).getArea())).toBe(7853)
})
