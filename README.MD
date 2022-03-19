# Geometry Library Demo

Simple geometry library for **2D** context. Every figure has its own coordinates.

The package is available as ESM module (bundle is required) on npm.

## Usage

```console
pnpm i @zardoy/geometry-demo
```

```ts
import { Rectangular } from '@zardoy/geometry-demo'

const rect = new Rectangular({ x: 5, y: 5, width: 50, height: 50 })
const rect2 = rect.clone()
rect.x++
rect2.x // 5
```

## API

[API docs](https://paka.dev/npm/@zardoy/geometry-demo). Docs are also available in [./docs/](./docs/README.md)
