import { Triangle } from './triangle'

test('getArea', () => {
    expect(
        new Triangle([
            [0, 0],
            [0, 5],
            [5, 0],
        ]).getArea(),
    ).toMatchInlineSnapshot('12.5')
})
