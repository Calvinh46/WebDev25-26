/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","ribeye.jpg","steak.jpg","brisket.jpg"];
let meat_prices = [10.99,21.99,14.99,22.99];
let meat_titles = ["Beef Tips","Ribeye","Steak","Brisket"];

let seafood_images = ["tuna.jpg","lobster.png","clams.jpg","crabs.jpg","scallops.jpg","shrimp.jpg"];
let seafood_prices = [8.49,28.49,16.99,13.49,10.99,12.99];
let seafood_titles = ["Tuna","Lobster","Clams","Crabs","Scallops","Shrimp"];

let dessert_images = ["oreocup.jpg","flan.jpg","passionberry.jpeg"];
let dessert_prices = [5.99,6.99,14.49];
let dessert_titles = ["Oreo Cup","Flan","Passion Berry"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let i = 0; i < meat_images.length; i++){
    build += `<div class="card">
                <h4>$${meat_prices[i]}</h4>
                <img class="food" src ="images/${meat_images[i]}">
                <h3>${meat_titles[i]}</h3>
              </div>`;
  }
  m.innerHTML=build;
  //Challenge 5: Build cards for the seafoods. Place the build in the seafood container.
  for(let i = 0; i < seafood_images.length; i++){
    build += `<div class="card">
                <h4>$${seafood_prices[i]}</h4>
                <img class="food" src="images/${seafood_images[i]}">
                <h3>${seafood_titles[i]}</h3>
              </div>`;
  }
  s.innerHTML=build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  for(let i = 0; i < dessert_images.length; i++){
    build += `<div class="card">
                <h4>$${dessert_prices[i]}</h4>
                <img class="food" src="images/${dessert_images[i]}">
                <h3>${dessert_titles[i]}</h3>
              </div>`;
  }
  d.innerHTML=build;
}
