marsimage=["mars.jpg","mars1.jfif","mars2.jpg","mar3.jpg","mars4.jpg","mars5.jpg"]
random_number=Math.floor(Math.random()*6)

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image=marsimage[random_number];
rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed);
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10
        uploadBackground();
        uploadRover();
    }
}