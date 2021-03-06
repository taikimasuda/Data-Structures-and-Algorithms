function printAllNumbersThenAllPairSums(numbers) {
  console.log('there are the numbers:');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('and these are their sums:');
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]) // Time Complexity: O(n + n^2) ~[Drop Non Dominants]~ --> O(n^2)