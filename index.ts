const minMaxSumOfInt = (arr) => {
  let sum_min = 0;
  let sum_max = 0;
  let sum = 0;
  let min_val = arr[0];
  let max_val = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > max_val) {
      max_val = arr[index];
    }
    if (arr[index] < min_val) {
      min_val = arr[index];
    }
    sum = sum + arr[index];
  }
  sum_min = sum - max_val;
  sum_max = sum - min_val;

  return [sum_min, sum_max];
};

const sampleData = [1, 2, 3, 4, 5];
console.log(minMaxSumOfInt(sampleData));

// [10,14]
