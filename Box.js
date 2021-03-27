class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'visibility': 3
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box.png");
      World.add(world, this.body);
      this.Visiblity = 255
      this.remove = true
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image,0, 0, this.width, this.height);
      pop();
      if(this.body.speed<9){

      }
      else {
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        tint(0, this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
      }
      }
    }