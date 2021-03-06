//#1 -- For loop in Javascript
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');

function findNemo(fishes) {
  let t0 = performance.now();
  for (let i = 0; i < fishes.length; i++) {
    if (fishes[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

function getFirstFish(fishes) {
  console.log(fishes[0]);
}

function getFirstTwoFish(fishes) {
  console.log(fishes[0]);
  console.log(fishes[1]);
}

// O(n) --> Linear Time
findNemo(everyone); // Time Complexity: O(n)
findNemo(large);  // Time Complexity: O(n)
getFirstFish(everyone); // Time Complexity: O(1)
getFirstTwoBoxes(fish) // Time Complexity: O(2)


const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Found Nemo!');
    }
  });
}

const findNemo3 = array => {
  for (let fish of array) {
    if(fish === 'nemo') {
      console.log('Found Nemo!');
    }
  };
}

findNemo2(everyone); // Time Complexity: O(n)
findNemo3(everyone); // Time Complexity: O(n)