// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function avg(){
    let g1 = parseInt(document.getElementById("grade1").value);
    let g2 = parseInt(document.getElementById("grade2").value);
    let g3 = parseInt(document.getElementById("grade3").value);
    let op = document.getElementById("output");
    let avg = (g1 + g2 + g3) / 3;
    op.innerHTML =`The average of all 3 grades is ${avg}`;

}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope(){
    let y1 = parseInt(document.getElementById("y1").value);
    let y2 = parseInt(document.getElementById("y2").value);
    let x1 = parseInt(document.getElementById("x1").value);
    let x2 = parseInt(document.getElementById("x2").value);
    let op = document.getElementById("output");
    let m = (y2-y1)/(x2-x1);
    op.innerHTML = `The slope of the line between (${x2},${x1}) and (${y2},${y1}) is ${m}`;

}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI(){
    let height = parseFloat(document.getElementById("ht").value);
    let weight = parseFloat(document.getElementById("wt").value);
    let op = document.getElementById("output");
    let bmi = 703 * weight/(height*height);
    op.innerHTML = `Your BMI is ${bmi}`;
}