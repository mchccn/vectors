type Components = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;

type Decrement<X extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][X];

type CreateArray<T, L extends number> = L extends -1 ? [] : [T, ...CreateArray<T, Decrement<L>>];

type Methods<T> = keyof { [P in keyof T as T[P] extends Function ? P : never]: T[P] };

type CanonicalAxisNames = [never, "x", "y", "z", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

type Axis<C extends Components> = GetCanonicalAxisNames<C, []>[number];

type GetCanonicalAxisNames<C extends Components, R extends string[] = []> = C extends 0 | -1 ? R : GetCanonicalAxisNames<Decrement<C>, [CanonicalAxisNames[C], ...R]>;

type GetCanonicalParamNames<C extends Components> = [
    never,
    [x: number],
    [x: number, y: number],
    [x: number, y: number, z: number],
    [x: number, y: number, z: number, w: number],
    [x: number, y: number, z: number, w: number, v: number],
    [x: number, y: number, z: number, w: number, v: number, u: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number, e: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number, e: number, d: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number, e: number, d: number, c: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number, e: number, d: number, c: number, b: number],
    [x: number, y: number, z: number, w: number, v: number, u: number, t: number, s: number, r: number, q: number, p: number, o: number, n: number, m: number, l: number, k: number, j: number, i: number, h: number, g: number, f: number, e: number, d: number, c: number, b: number, a: number]
][C];

type GenerateCreateVectorMethodOverloads<
    C extends Components,
    O extends CreateVectorOptions<C>,
    K extends string
> = ({
    [N in K]: (a: VectorStruct<C, O>, b: VectorStruct<C, O>) => VectorStruct<C, O>
} & {
    [N in K]: (vector: VectorStruct<C, O>, scalar: number) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, ...components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, components: { [N in GetCanonicalAxisNames<C>[number]]: number; }) => VectorStruct<C, O>;
})[K];

type GenerateVectorStructMethodOverloads<
    C extends Components,
    O extends CreateVectorOptions<C>,
    K extends string
> = ({
    [N in K]: (vector: VectorStruct<C, O>) => VectorStruct<C, O>
} & {
    [N in K]: (scalar: number) => VectorStruct<C, O>;
} & {
    [N in K]: (...components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (components: { [N in GetCanonicalAxisNames<C>[number]]: number; }) => VectorStruct<C, O>;
})[K];

type ArrayToUnion<T> = T extends unknown[] ? T[number] : never;

type Functions = "add" | "subtract" | "multiply" | "divide";

type ApplyOptions<
    T,
    C extends Components,
    O extends CreateVectorOptions<C>
> = O["exclude"] extends "*"
    ? CreateVectorConstructor<VectorStruct<C, O>, C> 
    //@ts-ignore
    : Omit<
        T,
        ArrayToUnion<O["exclude"]>
    > & CreateVectorConstructor<VectorStruct<C, O>, C>;

type CreateVectorConstructor<T, C extends Components> = {
    new (vector?: T): T;
    new (...components: GetCanonicalParamNames<C>): T;
    new (components: GetCanonicalParamNames<C>): T;
    new (components: { [N in GetCanonicalAxisNames<C>[number]]: number; }): T;
};

type CreateVector<C extends Components, O extends CreateVectorOptions<C>> = VectorStruct<C, O> extends infer T ? {
    [M in Functions]: GenerateCreateVectorMethodOverloads<C, O, M>
} & CreateVectorConstructor<T, C> & {
    dot: (a: T, b: T) => number;
    angleTo: (a: T, b: T) => number;
    magnitude: (vector: T) => number;
    length: (vector: T) => number;
    max: (vector: T) => number;
    min: (vector: T) => number;
    equals: (a: T, b: T) => boolean;
    toArray: (vector: T) => CreateArray<number, Decrement<C>>;
    normalize: (vector: T) => T;
    negate: (vector: T) => T;
    clone: (vector: T) => T;
    from: 
        & ((vector?: T) => T)
        & ((...components: GetCanonicalParamNames<C>) => T)
        & ((components: GetCanonicalParamNames<C>) => T)
        & ((components: { [N in GetCanonicalAxisNames<C>[number]]: number; }) => T);
    toPoint: (vector: T) => { [N in GetCanonicalAxisNames<C>[number]]: number; };
} : never;

type VectorStruct<
    C extends Components,
    O extends CreateVectorOptions<C>
> = O["exclude"] extends "*" ? {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    } : Omit<
        StaticVectorStruct<C, O>,
        ArrayToUnion<O["exclude"]>
    >;

type StaticVectorStructMethods<C extends Components, O extends CreateVectorOptions<C>> = {
    dot: (vector: StaticVectorStruct<C, O>) => number;
    angleTo: (vector: StaticVectorStruct<C, O>) => number;
    magnitude: () => number;
    length: () => number;
    max: () => number;
    min: () => number;
    equals: (vector: StaticVectorStruct<C, O>) => boolean;
    toArray: () => CreateArray<number, Decrement<C>>;
    normalize: () => VectorStruct<C, O>;
    negate: () => VectorStruct<C, O>;
    clone: () => VectorStruct<C, O>;
    toPoint: () => { [N in GetCanonicalAxisNames<C>[number]]: number; };
};

type StaticVectorStruct<
    C extends Components,
    O extends CreateVectorOptions<C>
> = {
    [M in Functions]: GenerateVectorStructMethodOverloads<C, O, M>
} & StaticVectorStructMethods<C, O> & {
    [N in GetCanonicalAxisNames<C>[number]]: number;
};

type CreateVectorOptions<C extends Components> = {
    exclude?: (Methods<CreateVector<C, {}>> | Methods<VectorStruct<C, {}>>)[] | "*";
    immutable?: boolean;
};

type VectorConstructor<C extends Components, O extends CreateVectorOptions<C>> = ApplyOptions<CreateVector<C, O>, C, O>;

function create<C extends Exclude<Components, -1 | 0>, O extends CreateVectorOptions<C> = { exclude: []; immutable: false; }>(components: C, options?: O): VectorConstructor<C, O> {
    const { exclude, immutable }: Required<CreateVectorOptions<C>> = {
        exclude: [],
        immutable: false,
        ...options,
    };

    const axes = ["x", "y", "z", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"] as const;

    class Vector {
        public x!: number;
        public y!: number;
        public z!: number;
        public w!: number;
        public v!: number;
        public u!: number;
        public t!: number;
        public s!: number;
        public r!: number;
        public q!: number;
        public p!: number;
        public o!: number;
        public n!: number;
        public m!: number;
        public l!: number;
        public k!: number;
        public j!: number;
        public i!: number;
        public h!: number;
        public g!: number;
        public f!: number;
        public e!: number;
        public d!: number;
        public c!: number;
        public b!: number;
        public a!: number;

        public constructor (vector?: Vector);
        public constructor (components: GetCanonicalParamNames<C>);
        public constructor (...components: GetCanonicalParamNames<C>);
        public constructor (components: { [N in GetCanonicalAxisNames<C>[number]]: number; });
        public constructor (...args: 
            | [vector?: Vector] 
            | [components: GetCanonicalParamNames<C>] 
            | GetCanonicalParamNames<C>
            | [components: { [N in GetCanonicalAxisNames<C>[number]]: number; }] 
        ) {
            for (const axis of axes.slice(0, components)) {
                this[axis] = 0;
            }

            const [first, ...rest] = args;
            
            init: if (!rest.length) {
                if (Array.isArray(first)) {
                    first.forEach((value, i) => {
                        this[axes[i]] = value;
                    });

                    break init;
                }

                if (first instanceof Vector || (typeof first === "object" && first)) {
                    const output = Object.fromEntries(
                        (Object.entries(first) as [typeof axes[number], number][]).filter(
                            ([key]) => axes.includes(key)
                        )
                    ) as { [N in GetCanonicalAxisNames<C>[number]]: number; };

                    Object.assign(this, output);

                    break init;
                }
            } else {
                args.forEach((value, i) => {
                    this[axes[i]] = value as number;
                });
            }
        }

        public add!: unknown;
        public subtract!: unknown;
        public multiply!: unknown;
        public divide!: unknown;

        public dot!: (vector: VectorStruct<C, O>) => number;
        public angleTo!: (vector: VectorStruct<C, O>) => number;
        public magnitude!: () => number;
        public length!: () => number;
        public max!: () => number;
        public min!: () => number;
        public equals!: (vector: VectorStruct<C, O>) => boolean;
        public toArray!: () => CreateArray<number, Decrement<C>>;
        public cross!: (vector: VectorStruct<C, O>) => VectorStruct<C, O>;
        public normalize!: () => VectorStruct<C, O>;
        public negate!: () => VectorStruct<C, O>;
        public clone!: () => VectorStruct<C, O>;
        public toPoint!: () => { [N in GetCanonicalAxisNames<C>[number]]: number; };
    }

    if (exclude !== "*") {
        Object.entries(
            {
                add: (vector, axis, value) => void (vector[axis as Axis<C>] += value),
                subtract: (vector, axis, value) => void (vector[axis as Axis<C>] -= value),
                multiply: (vector, axis, value) => void (vector[axis as Axis<C>] *= value),
                divide: (vector, axis, value) => void (vector[axis as Axis<C>] /= value),
            } as Record<Functions, (vector: { [N in GetCanonicalAxisNames<C>[number]]: number; }, axis: typeof axes[number], value: number) => void>
        ).filter(([fn]) => !exclude.includes(fn as typeof exclude[number])).forEach(([fn, exec]) => {
            Vector.prototype[fn as Functions] = function (...args: 
                | [vector: Vector] 
                | [scalar: number] 
                | GetCanonicalParamNames<C> 
                | [components: GetCanonicalParamNames<C>] 
                | [components: { [N in GetCanonicalAxisNames<C>[number]]: number; }]
            ) {
                const [first, ...rest] = args;

                const output = Object.fromEntries(
                    (Object.entries(this) as [typeof axes[number], number][]).filter(
                        ([key]) => axes.includes(key)
                    )
                ) as { [N in GetCanonicalAxisNames<C>[number]]: number; };

                if (!rest.length) {
                    if (Array.isArray(first)) {
                        if (immutable) {
                            first.forEach((value, i) => exec(output, axes[i], value));

                            return new Vector(output);
                        } else {
                            first.forEach((value, i) => exec(this, axes[i], value));

                            return this;
                        }
                    }

                    if (first instanceof Vector || (typeof first === "object" && first)) {
                        if (immutable) {
                            Object.keys(output).forEach((key) => exec(output, key as Axis<C>, first[key as Axis<C>]));

                            return new Vector(output);
                        } else {
                            Object.keys(output).forEach((key) => exec(this, key as Axis<C>, first[key as Axis<C>]));

                            return this;
                        }
                    }

                    if (typeof first === "number") {
                        if (immutable) {
                            Object.keys(output).forEach((key) => exec(output, key as Axis<C>, first));

                            return new Vector(output);
                        } else {
                            Object.keys(output).forEach((key) => exec(this, key as Axis<C>, first));

                            return this;
                        }
                    }

                    throw new Error("Invalid argument.");
                } else {
                    if (immutable) {
                        args.forEach((value, i) => exec(output, axes[i], value as number));

                        return new Vector(output);
                    } else {
                        args.forEach((value, i) => exec(this, axes[i], value as number));

                        return this;
                    }
                }

            }
        });

        type BindToVector<T extends Record<string, (...args: any[]) => any>> = { [K in keyof T]: (this: StaticVectorStruct<C, O> & { [A in Axis<Components>]: number }, ...args: Parameters<T[K]>) => ReturnType<T[K]>; };

        Object.entries({
            dot(vector) {
                return (Object.keys(vector) as typeof axes[number][]).filter(
                        (key) => axes.includes(key)
                ).reduce((product, axis) => product + this[axis] * (vector[axis as Axis<C>] ?? 0), 0);
            },
            angleTo(vector) {
               return Math.acos(this.dot(vector) / this.magnitude() * vector.magnitude());
            },
            magnitude() {
                return Math.pow((Object.keys(this) as typeof axes[number][]).filter(
                        (key) => axes.includes(key)
                ).reduce((product, axis) => product + this[axis] * this[axis], 0), 1 / components);
            },
            length() {
                return this.magnitude();
            },
            max() {
                return Math.max(...(Object.entries(this) as [typeof axes[number], number][]).filter(([key]) => axes.includes(key)).map(([, v]) => v));
            },
            min() {
                return Math.min(...(Object.entries(this) as [typeof axes[number], number][]).filter(([key]) => axes.includes(key)).map(([, v]) => v));
            },
            equals(vector) {
                return (Object.keys(vector) as typeof axes[number][]).filter(
                        (key) => axes.includes(key)
                ).every((key) => this[key] === vector[key as Axis<C>]);
            },
            toArray() {
                return (Object.keys(this) as typeof axes[number][]).filter(
                        (key) => axes.includes(key)
                ).sort((a, b) => axes.indexOf(a) - axes.indexOf(b)).map((key) => this[key]) as CreateArray<number, Decrement<C>>;
            },
            normalize() {
                return this.divide(this.magnitude());                    
            },
            negate() {
                return this.multiply(-1);
            },
            clone() {
                return new Vector(this);
            },
            toPoint() {
                return Object.fromEntries(
                    (Object.entries(this) as [typeof axes[number], number][]).filter(
                        ([key]) => axes.includes(key)
                    )
                ) as { [N in GetCanonicalAxisNames<C>[number]]: number; };  
            },
        } as Partial<BindToVector<StaticVectorStructMethods<C, O>>>).filter(([m]) => !exclude.includes(m as typeof exclude[number])).forEach(([method, fn]) => {
            Object.defineProperty(Vector.prototype, method, {
                value(...args: any[]) { return (fn as Function).apply(this, args); },
                writable: true,
                configurable: true,
                enumerable: false,
            });
        });
    }

    return Vector as unknown as VectorConstructor<C, O>;
}

export default create;
module.exports = create;
exports.default = create;