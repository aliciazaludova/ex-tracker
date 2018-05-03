const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeEx = require('./dom');

const whenExLoads = (data) => {  // passing in the word data parses the data here
  console.log('data', data);
  $('#ex-card').append(writeEx(data.ex)); // this is the new printToDom
};

const whenLocationsLoad = (data) => { // passing in the word data parses the data here
  console.log('data', data);
};

const whenStuffDontLoad = (error) => {
  console.error('error', error);
};

const initializer = () => {
  loadEx(whenExLoads, whenStuffDontLoad);
  loadLocations(whenLocationsLoad, whenStuffDontLoad);
};

// we want to call exes from main file so export
module.exports = initializer;
