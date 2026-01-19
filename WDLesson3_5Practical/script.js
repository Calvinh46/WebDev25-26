/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let len=parseFloat(document.getElementById("l").value);
      let wid=parseFloat(document.getElementById("w").value);
      let op=document.getElementById("output");
      let A = len * wid;
      op.innerHTML="Area = " + A;
}

function recPerimeter(){
      let len=parseInt(document.getElementById("l").value);
      let wid=parseInt(document.getElementById("w").value);
      let op=document.getElementById("output");
      let A = len + wid;
      op.innerHTML= "Perimeter = "+ A;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let len=parseFloat(document.getElementById("l").value);
      let op=document.getElementById("output");
      let A = pi * len;
      op.innerHTML="Area = " + A;
}

function cirPerimeter(){
      let len=parseInt(document.getElementById("l").value);
      let op=document.getElementById("output");
      let A = pi + len;
      op.innerHTML= "Perimeter = " + A;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
      let base=parseFloat(document.getElementById("b").value);
      let height=parseFloat(document.getElementById("h").value);
      let op=document.getElementById("output");
      let A = 1 / 2 * base * height;
      op.innerHTML="Area = " + A;
}

function triPerimeter(){
      let length=parseInt(document.getElementById("l").value);
      let base=parseInt(document.getElementById("b").value);
      let width=parseInt(document.getElementById("w").value);
      let op=document.getElementById("output");
      let A = length + base + width;
      op.innerHTML="Perimeter = " + A;
}