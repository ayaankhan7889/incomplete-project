class Paper1{
    constructor (x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        
        this.x = x
        this.y = y
        this.r = r
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world, this.body);
        this.paper = loadImage("paper.png");
      }
      display(){
        image(this.paper,200,20,50,60);
        push();
        translate(this.body.position.x, this.body.position.y);
        
        ellipseMode(CENTER);
        strokeWeight(5)
        fill("pink")
        ellipse(0,0,this.r,this.r)
        pop();
      }
    
}






