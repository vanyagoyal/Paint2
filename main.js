mouseEvent="empty";
canvas=document.getElementById("canvas_1");
ctx=canvas.getContext("2d");
color="red";
radius="20";
width="3";
var current_x,current_y;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color_input").value;
    radius=document.getElementById("radius_input").value;
    width=document.getElementById("width_input").value;
    mouseEvent = "mousedown";
}
function clear_1() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        console.log("Current X and Y Position is");
        console.log("X="+current_x+"Y="+current_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_x,current_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}