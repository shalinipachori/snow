class Snow{
    constructor(){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':0.01
        }
        this.body = Bodies.circle(10, 10, 20, options);
        
        this.snow1Image = loadImage("sprites/snow4.webp");
        this.snow2Image = loadImage("sprites/snow5.webp");
        this.trajectory =[];
  }
    }

