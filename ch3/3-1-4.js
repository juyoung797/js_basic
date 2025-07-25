function sumArray(arr) {
    if (arr.length === 0) return 0;

    const [head, ...tail] = arr;
    
    return head + sumArray(tail);
}

console.log(sumArray([1, 2, 3, 4]));