leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
song="";

function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.hide();
    posenet=ml5.poseNet(Video, modelLoaded);
    posenet.on('pose', gotpose);
}

function draw(){
    image(Video,0,0,600,500);
}

function modelLoaded(){
    console.log("posenet is intialized");
}

function gotpose(results){
    if (results.length > 0) {
        console.log(results);

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx= "+leftwristx);
        console.log("leftwristy= "+leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightwristx= "+rightwristx+"rightwristy= "+rightwristy);
    }
}