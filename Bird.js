class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);
    
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    
    rectMode(CENTER);
    strokeWeight(4);
    stroke ("green");
    fill(255);
  }
  
}
