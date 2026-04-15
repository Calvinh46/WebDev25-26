/* Challenges 4,5, and 6 below task you to transform the following parallel arrays into arrays of JSON
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"]
let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];

let seafood_titles = ["Clams","Crabs","Lobster","Scallop","Shrimp","Tuna"]
let seafood_images = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [8.99,12.99,30.59,23.95,10.99,5.99];

let dessert_titles = ["Flan","Passion Berry","Oreo Cup"]
let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [4.15,3.99,2.99];
*/

// Challenge 4: Create an array of JSON where each JSON contains the name, an image source and price for each Meat item.  
// Solution to Challenge 4 is provided below as an example in order to complete Challenges 5 and 6.
let meats = [
              { title: "Beef Tips", image: "beeftips.jpg", price: 18.99 },
              { title: "Brisket", image: "brisket.jpg", price: 27.99 },
              { title: "Ribeye", image: "ribeye.jpg", price: 21.99 },
              { title: "Steak", image: "steak.jpg", price: 15.99 }
];

// Challenge 5: Create an array of JSON where each JSON contains the name, an image source and price for each Seafood item.  
let seafood = [
                { title: "Clams", image: "clams.jpg", price: 12.99 },
                { title: "Crabs", image: "crabs.jpg", price: 13.49 },
                { title: "Lobster", image: "lobster.png", price: 35.99 },
                { title: "Scallops", image: "scallops.jpg", price: 19.99 },
                { title: "Shrimp", image: "shrimp.jpg", price: 7.99 },
                { title: "Tuna", image: "tuna.jpg", price: 9.49 }
];

// Challenge 6: Create an array of JSON where each JSON contains the name, an image source and price for each Dessert item.  
let desserts = [
                  { title: "Oreo Cup", image: "oreocup.jpg", price: 10.99 },
                  { title: "Flan", image: "flan.jpg", price: 7.99 },
                  { title: "Passion Berry", image: "passionberry.jpeg", price: 14.99 }
];

function showMeats(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 7
     1) Using a 'for' loop and the array of JSON from Challenge 4, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Meats". 
  */
  for(let i = 0; i < meats.length ; i++){
    let item = meats[i];
    build += `<div class="card">
                <h3>${item.title}</h3>
                <img src = "${item.image}">
                <p>$${item.price}</p>
              </div>`;
  }

  output.innerHTML = build;
  // Write the title "Meats" in the div with id 'title'
  title.innerHTML = "Meats";
}

function showSeafood(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 8
     1) Using a 'for' loop and the array of JSON from Challenge 5, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.   
     2) Change the title to "Seafood".
  */
   for(let i = 0; i < seafood.length ; i++){
    let item2 = seafood[i];
    build += `<div class="card">
                <h3>${item2.title}</h3>
                <img src = "${item2.image}">
                <p>$${item2.price}</p>
              </div>`;
  }


  output.innerHTML = build;
  // Write the title "Seafood" in the div with id 'title'
  title.innerHTML = "Seafood";
}

function showDesserts(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 9
     1) Using a 'for' loop and the array of JSON from Challenge 6, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Desserts".
  */
  for(let i = 0; i < desserts.length ; i++){
    let item3 = desserts[i];
    build += `<div class="card">
                <h3>${item3.title}</h3>
                <img src = "${item3.image}">
                <p>$${item3.price}</p>
              </div>`;
  }

  output.innerHTML = build;
  // Write the title "Desserts" in the div with id 'title'
  title.innerHTML = "Desserts";
}
