[@zardoy/geometry-demo](../README.md) / [Exports](../modules.md) / Circle

# Class: Circle

## Implements

- [`CoordinateWithRadius`](../interfaces/CoordinateWithRadius.md)
- `BasicFigure`<[`Circle`](Circle.md)\>

## Table of contents

### Constructors

- [constructor](Circle.md#constructor)

### Properties

- [radius](Circle.md#radius)
- [x](Circle.md#x)
- [y](Circle.md#y)

### Accessors

- [diameter](Circle.md#diameter)

### Methods

- [clone](Circle.md#clone)
- [getArcLength](Circle.md#getarclength)
- [getArea](Circle.md#getarea)
- [isEquals](Circle.md#isequals)

## Constructors

### constructor

• **new Circle**(`x`, `y`, `radius`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |

#### Defined in

[oop/circle.ts:9](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L9)

## Properties

### radius

• **radius**: `number`

#### Implementation of

[CoordinateWithRadius](../interfaces/CoordinateWithRadius.md).[radius](../interfaces/CoordinateWithRadius.md#radius)

___

### x

• **x**: `number`

#### Implementation of

[CoordinateWithRadius](../interfaces/CoordinateWithRadius.md).[x](../interfaces/CoordinateWithRadius.md#x)

___

### y

• **y**: `number`

#### Implementation of

[CoordinateWithRadius](../interfaces/CoordinateWithRadius.md).[y](../interfaces/CoordinateWithRadius.md#y)

## Accessors

### diameter

• `get` **diameter**(): `number`

#### Returns

`number`

#### Defined in

[oop/circle.ts:27](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L27)

• `set` **diameter**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `number` |

#### Returns

`void`

#### Defined in

[oop/circle.ts:31](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L31)

## Methods

### clone

▸ **clone**(): [`Circle`](Circle.md)

#### Returns

[`Circle`](Circle.md)

#### Implementation of

BasicFigure.clone

#### Defined in

[oop/circle.ts:11](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L11)

___

### getArcLength

▸ **getArcLength**(): `number`

#### Returns

`number`

#### Defined in

[oop/circle.ts:23](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L23)

___

### getArea

▸ **getArea**(): `number`

#### Returns

`number`

#### Defined in

[oop/circle.ts:19](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L19)

___

### isEquals

▸ **isEquals**(`figureToCompare`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `figureToCompare` | [`Circle`](Circle.md) |

#### Returns

`boolean`

#### Implementation of

BasicFigure.isEquals

#### Defined in

[oop/circle.ts:15](https://github.com/zardoy/geometry-lib-demo/blob/673dbf4/src/oop/circle.ts#L15)
