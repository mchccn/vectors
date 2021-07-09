# @cursorsdottsx/vectors

> Over-engineered, multi-dimensional and firmly typed vector creation library.

<small>Represents vectors from 1 to 26 dimensions (because we ran out of reasonable axis names).</small>

#### Installation and usage

```
$ npm install @cursorsdottsx/vectors --save
```

```
$ yarn add @cursorsdottsx/vectors
```

```js
const create = require("@cursorsdottsx/vectors");
```

```ts
import create from "@cursorsdottsx/vectors";
```

```js
import create from "@cursorsdottsx/vectors";

const Vector2 = create(2);
const Vector3 = create(3);

const vec2 = new Vector2();
const vec3 = new Vector3();

/* prop || type */

vec2.x; // number
vec2.y; // number
vec2.z; // undefined

vec3.z; // number
```

#### API

```js
/**
 * @typedef {object} CreateVectorOptions
 * @prop {string | string[]} exclude
 * @prop {boolean} immutable
 */

/**
 * @param {number} components
 * @param {CreateVectorOptions} options
 * @returns Vector
 */
create(components, options?);
```

```js
Vector {};

Vector.prototype;

/**
 * dot        :  dot product
 * angleTo    :  angle to another vector
 * magnitude  :  magnitude of vector
 * length     :  alias for magnitude
 * max        :  largest component
 * min        :  smallest component
 * equals     :  check for equality
 * toArray    :  convert vector to array
 * normalize  :  normalize vector
 * negate     :  negate all components
 * clone      :  clone vector
 * toPoint    :  convert vector to point object
 */
```
