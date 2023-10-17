export type Remap<T> = {
    [P in keyof T]: T[P];
};

export type Pretty<T> =
    & {
        [P in keyof T]: T[P];
    }
    & {};

export type FieldDiff<T1, T2> = Omit<T1, keyof T2> | Omit<T2, keyof T1>;

export type Combine<T1, T2> = Pretty<
    {
        [K in keyof (T1 | T2)]: T1[K] | T2[K];
    } & Partial<T1 & T2>
>;
