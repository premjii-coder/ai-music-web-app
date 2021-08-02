song1="";
song2="";
scoreleftwrist=0;
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;

function preload(){
    song1=loadSound("Im_So_Sorry.mp3");
    song2=loadSound("master.mp3");
}
function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    poseNet=ml5.poseNet(webcam,ml);
    poseNet.on('pose',gr);
}
function ml(){
    console.log("model is intialised");
}
function gr(result){
    if(result.length>0){
        console.log(result);
        rightWristx=result[0].pose.rightWrist.x;
        rightWristy=result[0].pose.rightWrist.y;
        leftWristx=result[0].pose.leftWrist.x;
        leftWristy=result[0].pose.leftWrist.y;
        scoreleftwrist=result[0].pose.keypoints[9].score;
        
    }
}
function draw(){
    image(webcam,0,0,250,250)
    background('#f0e678')
    fill('#d4f593');
    stroke('#d4f593');
   
    if(scoreleftwrist>0.2){

        circle(leftWristx,leftWristy,25);
        song2.stop()
        }
}