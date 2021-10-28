noseX = 0;
noseY = 0;

difference = 0;

rightWristX = 0;
leftWristX = 0;

noseX = 0;
noseY = 0;

function preload(){
    text = loadImage("https://i.postimg.cc/J0wqpf5T/lol.png");
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of the text is : " + difference + "px";

    image(text, noseX, noseY, difference, difference);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}