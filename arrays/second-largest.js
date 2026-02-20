function findSecondLargest(arr) {
    if (arr.length < 2) return null;

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

console.log(findSecondLargest([10,5,20,8]));

//Second largest even number 

function evenLarge(arr) {
    if (arr.length < 2) {
        return null;
    }

    let first = -Infinity
    let second = -Infinity

    for (let num of arr) {

        if (num % 2 === 0) {

            if (num > first) {
                second = first;
                first = num
            }
            else if (num > second && num < first) {
                second = num
            }
        }

    }
    return second === -Infinity ? null : second
}

console.log(evenLarge([1, 2, 3, 4, 5, 5, 6]))
