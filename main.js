noseX=0
noseY=0
difference = 0;
rightWristX = 0;
leftWristx = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('Pose', gotPoses);

}
function modelLoaded(){
    console.log('pose Net is Initialized!');
}

function gotPoses(Results){
    if(Results.length > 0){
        console.log(results)
        noseX = results[0].pose.leftWrist.x;
        noseY = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristX);
        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX +"difference = "+ difference);
    }
}
 
function draw(){
    background ('#969A97')

    document.getElementById("square_side").innerHTML="Width and Height of a sqaure will be = "
    fill('red');
    stroke('red');
    square(noseX,noseY,difference);
}