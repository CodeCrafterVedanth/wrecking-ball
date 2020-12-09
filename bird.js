class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':2.0,
          'density':1.0
      }
      this.radius = 35;
      this.body = Bodies.circle(x, y, this.radius , options);
      

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x=mouseX
      pos.y=mouseY
        translate(pos.x, pos.y);
      rotate(angle)
      ellipseMode(RADIUS)
      
      
      fill("gray");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  