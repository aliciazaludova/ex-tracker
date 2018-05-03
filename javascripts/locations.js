// this is now called ajax request; replaces xhr request

const loadLocations = (successFunction, errorFunction) => {
  $.get('../db/locations.json')  // go up one level to that of javascripts dir to get to db
    .done(successFunction)
    .fail(errorFunction); // this is actually a chain which is why semicolon only at end
};

module.exports = loadLocations;