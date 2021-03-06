function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boooooo!');
  }
}

boooo([1, 2, 3, 4, 5]); // Space complexity: O(1)

function arrayOfHelloNTimes(n) {
  let helloArray = [];
  for (let i = 0; i < n; i++) {
    helloArray[i] = 'hello';
  }

  return helloArray;
}

arrayOfHelloNTimes(5); // Space complexity: O(n)