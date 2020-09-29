class Paper{
    constructor(x,y){
        var options={
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/paper.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
    }
}