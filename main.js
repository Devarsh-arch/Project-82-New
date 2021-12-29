ctx= document.getElementById('#myCanvas').getContext("2d");
var mouseEvent ="empty"
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    var radius= document.getElementById("input_radius").value;
    var color= document.getElementById("input_color").value;
    var width= document.getElementById("input_width").value;
    mouseEvent ="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent ="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent ="mouseLeave";
}

canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y =");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widht;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 *Math.PI);
        ctx.stroke;
        }
    }
function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}