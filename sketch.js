let a=100
function setup(){
    createCanvas(500, 500);
}

function draw(){
  translate(250,250);

    background(0)
    stroke (200)
    noFill(0)
    rect (0,0,100,100)
    let x1 = map(mouseX, 0, width, 25, 75);
    ellipse(x1, 25, 25, 25);
    
    a+=0.01
    let x2 = map(noise(a), 0, 1, 25, 75);
     
    ellipse(x2, 25, 25, 25);
  
  //noLoop()
}
