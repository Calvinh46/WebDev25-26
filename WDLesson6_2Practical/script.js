function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = ``;

  build += `<div class ="card">
                <h2>${school.name}</h2>
                <img src ="${school.image}">
                <p>${school.address}</p>
            </div>`;
  output.innerHTML =build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Bad Bunny",
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1Is12nqfQESLkC8eHesrar1Jy5AUaMFiRQ&s",
    "album":"DeBÍ TiRAR MáS FOToS",
    "url":"https://depuertoricopalmundo.com/"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = ``;

  build += `<div class="card">
                <h2>${artist.name}</h2>
                <p>${artist.album}</p>
                <a target="_blank" href ="${artist.url}"><img src ="${artist.image}"></a>
            </div>`;
  
  output.innerHTML = build;
}





