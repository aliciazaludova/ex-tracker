const writeEx = (ex) => {  // pass in 'ex' which is not a placeholder but the name of the json object
  let domString = '';
  ex.forEach(myEx => {
    domString += `<div class="ex">`;
    domString += `<img src=${myEx.image}>`;
    domString += `<h2>${myEx.name}</h2>`;
    domString += `<h2>${myEx.age}</h2>`;
    domString += `<h2>${myEx.flaws}</h2>`;
    domString += `</div>`;
  });
  return domString;
};

const writeLocations = (locations) => {
  console.log(writeLocations);
  let locationString = '';
  locationString += `<div class="container-fluid">`;
  locationString += `<div class="row">`;
  locations.forEach((location) => {
    locationString += `<div class="col-sm-6">`;
    locationString += `<img class="loc-image" src=${location.locImage}>`;
    locationString += `<h2>${location.locName}</h2>`;
    locationString += `<h2>${location.locAddress}"</h2>`;
    locationString += `<h2>${location.times}</h2>`;
    locationString += `</div>`;
  });
  locationString += `</div>`;
  locationString += `</div>`;
  return locationString;
};

module.exports = {
  writeEx,
  writeLocations,
};
