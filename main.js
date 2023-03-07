Yellow = "";
Scientist = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload()
{
    Scientist = loadSound("SS.mp3");
    Yellow = loadSound("YY.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("The model has Loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("The x position of the Left Wrist is = " + left_wrist_x + ", and The y position of the Left Wrist is = " + left_wrist_y);
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("The x position of the Right Wrist is = " + right_wrist_x + ", and The y position of the Right Wrist is = " + right_wrist_y);


    }
}

function draw()
{
    image(video,0,0,600,500);
    

}