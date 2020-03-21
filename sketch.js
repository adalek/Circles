let a=0;
var colors=[];
function setup(){
    createCanvas(500, 500);
    //create colorpicker to change fore/background color;
    //create slider to change strokeweight;
    colorPicker1 = createColorPicker('#000000');
    colorPicker1.position(width,height+100);
    colorPicker2 = createColorPicker('#eae9e9');
    colorPicker2.position(width+100,height+100);
    colorPicker3 = createColorPicker('#eae9e9');
    colorPicker3.position(width-100,height+100);
    slider=createSlider(1,50,1);
    slider.position(width+200,height+100)
}

function draw(){
  translate(250,250);
    //background(0);
    background(colorPicker1.color());
    stroke (colorPicker2.color())
    strokeWeight(slider.value())
    noFill(0)
    let x1 = map(mouseX, 0, width, 0, 100);
    let x3= map(mouseY, 0, height, 0, 100);
  //animation effect;  
    let e=map(noise(a), 0, 1,0,10);
    a+=0.001
    let x2 = map(sin(e), 0, 1, 60, 400);

  rotate(a);
  for(let angle=0; angle<=PI*2; angle+=2*PI/8){
    rotate(angle);
    ellipse(0,x1,x3,x2);
    }
  
    rotate (-a*2)
    
  for(let angle=0; angle<=PI*2; angle+=2*PI/8){  
  rotate(angle);
  shape4(x1,x2,x3);
    }
}

// l&s means long,short radius
 function shape4(x,l,s){
 //4 circle
 stroke(colorPicker3.color());
 ellipse(x,x,l);

 }
 