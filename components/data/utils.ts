// index of array of length n
export const circulateIndex = (n: number) => (i: number) => (i % n + n) % n;
