function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);
pose_net=ml5.poseNet(video,modelloaded);
pose_net.on("pose",gotposes);
}

function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
save("save.png");
}
function modelloaded(){
console.log("Model Is Loaded!");
}

function gotposes(results){
if(results.length>0){
console.log(results);
console.log("Nose X = "+results[0].pose.nose.x);
console.log("Nose Y = "+results[0].pose.nose.y);
}
}