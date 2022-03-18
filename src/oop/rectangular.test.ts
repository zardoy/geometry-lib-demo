import { Rectangular } from './rectangular'

test('clone', () => {
    const rect1 = new Rectangular({ x: 0, y: 0, width: 100, height: 100 })
    rect1.x = 5
    const rect2 = rect1.clone()
    rect1.x = 0
    expect(rect2.x).not.toBe(rect1.x)
})
