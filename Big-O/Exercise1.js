function funChallange (input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let starnger = true; // O(n)
    a++; // O(n)
  }

  return a; //O(1)
}

funChallange(); // Time Complexity: O(3 + 4(or 3)n) ~[Drop the constant]~ --> O(n)