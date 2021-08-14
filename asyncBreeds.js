const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's callback; it has the data.");
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    }
  });
};

const printOutCatBreed = breed => {
  console.log("Return Value: " + breed);
}

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);
//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!