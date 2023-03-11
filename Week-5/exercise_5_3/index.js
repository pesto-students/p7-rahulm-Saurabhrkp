// const hasDuplicate = arr => new Set(arr).size !== arr.length;/

function hasDuplicate(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    } else {
      seen.add(num);
    }
  }

  return false;
}

const duplicates = hasDuplicate([1, -1, 5, -1, 4]);
console.log(duplicates);