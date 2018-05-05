const loadEx = require('./ex');
const loadLocations = require('./locations');
const showAll = require('./dom');

const whenExLoads = (data) => {  // passing in the word data parses the data here
  console.log('data', data);
  $('#ex-card').html(showAll.writeEx(data.ex)); // this is the new printToDom // ask for clarification of this statement
};

const whenLocationsLoad = (data) => { // passing in the word data parses the data here
  console.log('data', data);
  $('#location-card').append(showAll.writeLocations(data.locations));
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
