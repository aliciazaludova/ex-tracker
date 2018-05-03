const loadEx = require('./ex');
// const loadLocations = require('./locations');

const whenExLoads = (data) => {  // passing in the word data parses the data here
  console.log('data', data);
};

const whenExDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenExDontLoad);
};

// we want to call exes from main file so export
module.exports = initializer;
