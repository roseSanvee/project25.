class circularMatter{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            friction:1.0,
            density: 1.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        //World.add(world, this.body);
      }
      image(){
          circularMatter.image(paper.png);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}