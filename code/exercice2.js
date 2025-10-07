export default function findOdd(array = []) {
    if (array.length == 0 || array == null) {
        return [];
    }
    else {
        let count = {};
        for (let i = 0; i < array.length; i++) {
            count[array[i]] = (count[array[i]] || 0) + 1;
        }
        for (let key in count) {
            if (count[key] % 2 !== 0) {
                return parseInt(key);
            }
        }
    }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
