let sum = 0;
function sumItems(array) {
  // Sum all the numbers in the array
  for (let i = 0; i < array.length; i ++) {
    if (Array.isArray(array[i])) {
      sumItems(array[i]);
    } else { 
      sum += array[i];

    }
  }
  return sum;
}


module.exports = sumItems;
