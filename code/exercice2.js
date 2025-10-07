 function findOdd(array = []) {
    if (array.length == 0 || array == null) {
        return [];
    }
    else {
        let count = {};
        for (let i = 0; i < array.length; i++) {
            count[array[i]] = (count[array[i]] || 0) + 1;
        }
        for (let num in count) {
            if (count[num] % 2 !== 0) {
                return parseInt(num);
            }
        }
    }
}

export { findOdd};