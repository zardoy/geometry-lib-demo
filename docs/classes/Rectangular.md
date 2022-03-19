[@zardoy/geometry-demo](../README.md) / [Exports](../modules.md) / Rectangular

# Class: Rectangular

## Implements

- [`CoordinateWithSize`](../interfaces/CoordinateWithSize.md)
- `BasicFigure`<[`Rectangular`](Rectangular.md)\>

## Table of contents

### Constructors

- [constructor](Rectangular.md#constructor)

### Properties

- [height](Rectangular.md#height)
- [width](Rectangular.md#width)
- [x](Rectangular.md#x)
- [y](Rectangular.md#y)

### Methods

- [clone](Rectangular.md#clone)
- [getArea](Rectangular.md#getarea)
- [getPathLength](Rectangular.md#getpathlength)
- [isEquals](Rectangular.md#isequals)

## Constructors

### constructor

• **new Rectangular**(`x`, `y`, `width`, `height`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Defined in

[oop/rectangular.ts:10](https://github.com/zardoy/geometry-lib-demo/blob/8cf7cf7/src/oop/rectangular.ts#L10)

## Properties

### height

• **height**: `number`

#### Implementation of

[CoordinateWithSize](../interfaces/CoordinateWithSize.md).[height](../interfaces/CoordinateWithSize.md#height)

___

### width

• **width**: `number`

#### Implementation of

[CoordinateWithSize](../interfaces/CoordinateWithSize.md).[width](../interfaces/CoordinateWithSize.md#width)

___

### x

• **x**: `number`

#### Implementation of

[CoordinateWithSize](../interfaces/CoordinateWithSize.md).[x](../interfaces/CoordinateWithSize.md#x)

___

### y

• **y**: `number`

#### Implementation of

[CoordinateWithSize](../interfaces/CoordinateWithSize.md).[y](../interfaces/CoordinateWithSize.md#y)

## Methods

### clone

▸ **clone**(): [`Rectangular`](Rectangular.md)

#### Returns

[`Rectangular`](Rectangular.md)

#### Implementation of

BasicFigure.clone

#### Defined in

[oop/rectangular.ts:12](https://github.com/zardoy/geometry-lib-demo/blob/8cf7cf7/src/oop/rectangular.ts#L12)

___

### getArea

▸ **getArea**(): `number`

#### Returns

`number`

#### Defined in

[oop/rectangular.ts:25](https://github.com/zardoy/geometry-lib-demo/blob/8cf7cf7/src/oop/rectangular.ts#L25)

___

### getPathLength

▸ **getPathLength**(): `number`

#### Returns

`number`

#### Defined in

[oop/rectangular.ts:29](https://github.com/zardoy/geometry-lib-demo/blob/8cf7cf7/src/oop/rectangular.ts#L29)

___

### isEquals

▸ **isEquals**(`figureToCompare`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `figureToCompare` | [`Rectangular`](Rectangular.md) |

#### Returns

`boolean`

#### Implementation of

BasicFigure.isEquals

#### Defined in

[oop/rectangular.ts:16](https://github.com/zardoy/geometry-lib-demo/blob/8cf7cf7/src/oop/rectangular.ts#L16)
