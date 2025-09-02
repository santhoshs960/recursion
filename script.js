function fib(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) result.push(i);
        else if (i == 1) result.push(i)
        else {
            result.push((result[i-1] + result[i-2]))
        }
    }
    return result;
}

console.log(fib(10))

function fibSeq(num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(fibRec(i))
    }

    return result;
}

function fibRec(n) {
    if (n == 0) return n
    else if (n == 1) return n;
    else {
        return fibRec(n - 1) + fibRec(n - 2);
    }
}

console.log(fibSeq(10))

function mergeSort(arr) {
    if (arr.length == 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle)
    const mergeLeft = mergeSort(left);
    const mergeRight = mergeSort(right);
    const result = merge(mergeLeft, mergeRight);
    return result;

}

function merge(left, right) {
    const sortedArr = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            sortedArr.push(left[0]);
            left.shift();
        } else {
            sortedArr.push(right[0]);
            right.shift();
        }
    }
    return [...sortedArr, ...left, ...right]
}

console.log(mergeSort([8,2,5,1,6,7]));


