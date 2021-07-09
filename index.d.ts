declare type Components = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;
declare type Decrement<X extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25][X];
declare type CreateArray<T, L extends number> = L extends -1 ? [] : [T, ...CreateArray<T, Decrement<L>>];
declare type Methods<T> = keyof {
    [P in keyof T as T[P] extends Function ? P : never]: T[P];
};
declare type CanonicalAxisNames = [never, "x", "y", "z", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
declare type GetCanonicalAxisNames<C extends Components, R extends string[] = []> = C extends 0 | -1 ? R : GetCanonicalAxisNames<Decrement<C>, [CanonicalAxisNames[C], ...R]>;
declare type GetCanonicalParamNames<C extends Components> = [
    never,
    [
        x: number
    ],
    [
        x: number,
        y: number
    ],
    [
        x: number,
        y: number,
        z: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number,
        e: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number,
        e: number,
        d: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number,
        e: number,
        d: number,
        c: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number,
        e: number,
        d: number,
        c: number,
        b: number
    ],
    [
        x: number,
        y: number,
        z: number,
        w: number,
        v: number,
        u: number,
        t: number,
        s: number,
        r: number,
        q: number,
        p: number,
        o: number,
        n: number,
        m: number,
        l: number,
        k: number,
        j: number,
        i: number,
        h: number,
        g: number,
        f: number,
        e: number,
        d: number,
        c: number,
        b: number,
        a: number
    ]
][C];
declare type GenerateCreateVectorMethodOverloads<C extends Components, O extends CreateVectorOptions<C>, K extends string> = ({
    [N in K]: (a: VectorStruct<C, O>, b: VectorStruct<C, O>) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, scalar: number) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, ...components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (vector: VectorStruct<C, O>, components: {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    }) => VectorStruct<C, O>;
})[K];
declare type GenerateVectorStructMethodOverloads<C extends Components, O extends CreateVectorOptions<C>, K extends string> = ({
    [N in K]: (vector: VectorStruct<C, O>) => VectorStruct<C, O>;
} & {
    [N in K]: (scalar: number) => VectorStruct<C, O>;
} & {
    [N in K]: (...components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (components: GetCanonicalParamNames<C>) => VectorStruct<C, O>;
} & {
    [N in K]: (components: {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    }) => VectorStruct<C, O>;
})[K];
declare type ArrayToUnion<T> = T extends unknown[] ? T[number] : never;
declare type Functions = "add" | "subtract" | "multiply" | "divide";
declare type ApplyOptions<T, C extends Components, O extends CreateVectorOptions<C>> = O["exclude"] extends "*" ? CreateVectorConstructor<VectorStruct<C, O>, C> : Omit<T, ArrayToUnion<O["exclude"]>> & CreateVectorConstructor<VectorStruct<C, O>, C>;
declare type CreateVectorConstructor<T, C extends Components> = {
    new (vector?: T): T;
    new (...components: GetCanonicalParamNames<C>): T;
    new (components: GetCanonicalParamNames<C>): T;
    new (components: {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    }): T;
};
declare type CreateVector<C extends Components, O extends CreateVectorOptions<C>> = VectorStruct<C, O> extends infer T ? {
    [M in Functions]: GenerateCreateVectorMethodOverloads<C, O, M>;
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
    from: ((vector?: T) => T) & ((...components: GetCanonicalParamNames<C>) => T) & ((components: GetCanonicalParamNames<C>) => T) & ((components: {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    }) => T);
    toPoint: (vector: T) => {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    };
} : never;
declare type VectorStruct<C extends Components, O extends CreateVectorOptions<C>> = O["exclude"] extends "*" ? {
    [N in GetCanonicalAxisNames<C>[number]]: number;
} : Omit<StaticVectorStruct<C, O>, ArrayToUnion<O["exclude"]>>;
declare type StaticVectorStructMethods<C extends Components, O extends CreateVectorOptions<C>> = {
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
    toPoint: () => {
        [N in GetCanonicalAxisNames<C>[number]]: number;
    };
};
declare type StaticVectorStruct<C extends Components, O extends CreateVectorOptions<C>> = {
    [M in Functions]: GenerateVectorStructMethodOverloads<C, O, M>;
} & StaticVectorStructMethods<C, O> & {
    [N in GetCanonicalAxisNames<C>[number]]: number;
};
declare type CreateVectorOptions<C extends Components> = {
    exclude?: (Methods<CreateVector<C, {}>> | Methods<VectorStruct<C, {}>>)[] | "*";
    immutable?: boolean;
};
declare type VectorConstructor<C extends Components, O extends CreateVectorOptions<C>> = ApplyOptions<CreateVector<C, O>, C, O>;
declare function create<C extends Exclude<Components, -1 | 0>, O extends CreateVectorOptions<C> = {
    exclude: [];
    immutable: false;
}>(components: C, options?: O): VectorConstructor<C, O>;
export default create;
