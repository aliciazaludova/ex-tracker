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

module.exports = writeEx;
