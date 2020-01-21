var x = 0;
var y = 0;
var no_but = document.getElementById("no_button");
no_but.addEventListener("mouseover", move);
// var content = document.getElementById("content");

function move(){
  if(x <500){
    x += Math.floor(Math.random() * 300);
  }
  if(x >= 500){
    x -= Math.floor(Math.random() * 300);
  }
  if(y <500){
    y += Math.floor(Math.random() * 500);
  }
  if(y >= 500){
    y -= Math.floor(Math.random() * 500);
  }

  y += Math.floor(Math.random() * 200);
  no_but.style.left = x + 'px';
  no_but.style.top = y + 'px';
}
