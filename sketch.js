

var a = prompt("enter the first variable:");
var b = prompt("enter the second variable:")



function setup() {
  createCanvas(400, 400);

  var b2=createButton("click here to swap numbers");
  b2.mousePressed(swap);
}

function draw() {
  background(220);
}

function swap(){
  [a,b]=[b,a]
  console.log("the value of a after swapping"+a);
  console.log("the value of b after swapping"+b);
}