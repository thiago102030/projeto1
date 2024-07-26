function setup() {
    createCanvas(800, 800);
       background("blue");
  
  }
  
  function draw() {
   
    stroke("purple");
    fill ("red");
   
    if(mouseIsPressed){
      circle(mouseX, mouseY, 10, 50);
   
   }
  }
  