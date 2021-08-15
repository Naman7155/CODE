

var a = prompt('Enter the first variable: ');
var b = prompt("enter the second variable");

function setup(){
  var b2 = createButton("CLICK TO SWAP NUMBERS");
 b2.mousePressed(swap);
  }


function draw()
{
}
function swap()
{ [a,b] = [b,a]
  console.log("The value of a after swapping:" ,+a);
  console.log("The value of b after swapping:",+b);  
}