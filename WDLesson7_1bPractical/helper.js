//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card( cardinfo ){
  let build = "";
  build += `<div class="fitted card">
                 <h3>Summons#: ${cardinfo.summons_number}</h3>
                 <hr>
                 <p>Plate: ${cardinfo.plate}</p>
                 <p>License Type: ${cardinfo.license_type}</p>
                 <p>${cardinfo.violation}</p>
                 <hr>
                 <p>Issued on: ${cardinfo.issue_date}</p>
                 <hr>
                 <p>${cardinfo.issuing_agency}</p>
            </div>`;

  return build;
}
