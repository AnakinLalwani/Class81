
canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");

var color = "red";

ctx.beginPath();
ctx.lineWidth= 2 ;
ctx.strokeStyle = color;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
    console.log(color)
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X = "+ mouseX +", Y = " + mouseY)
    circle(mouseX, mouseY);
}
function circle(mouseX, mouseY) {
    ctx.beginPath();
    ctx.lineWidth= 2 ;
    ctx.strokeStyle = color;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();   
}
function clearCanvas() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
