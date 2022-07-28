export const mergeObjects =
    <T, U>(a: T, b: U) => ({...a, ...b});