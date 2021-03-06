function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function(boxes) {
    console.log(boxes);
  });
}

// Time Complexity: O(n + m)


// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes); // Time Complexity: O(n * n) --> O(n^2)