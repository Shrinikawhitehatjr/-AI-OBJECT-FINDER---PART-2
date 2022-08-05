video = "";

function setup(){
    canvas = CreateCanvas(480, 380);
    canvas.center();
}
function start()
{
    objectDetector.ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(0);
    video.volume(1)
}
function draw(){
    image(video, 0, 0, 480, 380);
}