function rotateArrayCounterClockwise(arr, rotations) {
        if (arr.length === 0) return arr;

        const actualRotations = rotations % arr.length;
        if (actualRotations === 0) return arr;

        return arr.slice(actualRotations).concat(arr.slice(0, actualRotations));
}


console.log(rotateArrayCounterClockwise([51, 47, 32, 61, 21], 2));
console.log(rotateArrayCounterClockwise([32, 21, 61, 1], 4));
console.log(rotateArrayCounterClockwise([2, 4, 15, 31], 5));