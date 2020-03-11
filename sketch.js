let a=0
function setup(){
    createCanvas(500, 500);
}

function draw(){
  translate(250,250);

    background(0)
    stroke (200)
    noFill(0)
    let x1 = map(mouseX, 0, width, 0, 100);
    let x3= map(mouseY, 0, width, 0, 100);
    let x2 = map(sin(a), 0, 1, 60, 400);
    a+=0.01
    
  //noLoop()
   shape4(x1,x2,x3)
}
 function shape4(x,l,s){
  fill (217,20,112,100);
 ellipse(0,x,s,l);
 //fill (4,191,191,200);
 ellipse(-x,0,l,s);
 //fill(166,51,126,200);
 ellipse(0,-x,s,l);
 //fill (4,191,173,100);
 ellipse(x,0,l,s);
 ellipse(x,x,l);
 ellipse(-x,-x,l);
 ellipse (-x,x,l);
 ellipse(x,-x,l);

 }
