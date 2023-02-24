const hasDuplicate = arr => new Set(arr).size !== arr.length;

const duplicates = hasDuplicate([1, -1, 5, -1, 4]);
console.log(duplicates);