function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 230, 150, 220, 200);

    fill(0, 150, 200)
    stroke(0, 150, 200)
    circle(50, 50, 80)

    fill(0, 150, 200)
    stroke(0, 150, 200)
    rect(50, 35, 265, 30)

    fill(0, 200, 150)
    stroke(0, 200, 150)
    rect(300, 35, 265, 30)

    fill(0, 200, 150)
    stroke(0, 200, 150)
    circle(570, 50, 80)



    fill(0, 150, 200)
    stroke(0, 150, 200)
    circle(50, 430, 80)

    fill(0, 150, 200)
    stroke(0, 150, 200)
    rect(50, 420, 265, 30)

    fill(0, 200, 150)
    stroke(0, 200, 150)
    rect(300, 420, 265, 30)

    fill(0, 200, 150)
    stroke(0, 200, 150)
    circle(570, 430, 80)



    fill(0, 200, 150)
    stroke(0, 200, 150)
    circle(50, 240, 80)



    fill(0, 150, 200)
    stroke(0, 150, 200)
    circle(570, 240, 80)
}
function take_snapshot()
{
    save("snapshot_to_picture_for_picture_frame")
}