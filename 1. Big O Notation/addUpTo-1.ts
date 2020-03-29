const addUpTo = (n: number): number => {
    let total = 0;

    for (let i = 1; i <= n; n++) {
        total += i;
    }

    return total;
};

const t1 = performance.now();
addUpTo(1000000000); //?
const t2 = performance.now();

`Time Elapsed: ${(t2 - t1) / 1000} seconds` //?

