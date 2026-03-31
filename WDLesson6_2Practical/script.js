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
                <h3>${school.name}</h3>
                <img src ="${school.image}">
                <a href ="${school.address}">Website</a>
            </div>`;
  output.innerHTML =build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Leonardo da Vinci",
    "image":"https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg?w=300",
    "album":"Sound of a Masterpiece",
    "url":"https://www.britannica.com/topic/Mona-Lisa-painting"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = ``;

  build += `<div class="card">
                <h3>${artist.name}</h3>
                <img src ="${artist.image}">
                <h4>${artist.album}</h4>
                <a href ="${artist.url}">website</a>
            </div>`;
  
  output.innerHTML = build;
}





