function setup()
{
  canvas = createCanvas(300,290);
  canvas.position(550, 250);
  video = createCapture(VIDEO);
  video.hide();
}
function draw()
{
  image(video, 0, 0, 300, 400);
}