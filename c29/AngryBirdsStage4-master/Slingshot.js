class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,160,20);
        image(this.sling2,128,14);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(81,50,27);

            if(pointA.x<160){
            line(pointA.x, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
            line(pointA.x, pointA.y, pointB.x-10, pointB.y+10);
            line(pointA.x, pointA.y, pointB.x+30, pointB.y+10);
            image(this.sling3,pointA.x+25,pointA.y-10,15,30);

            }
           
            pop();
            
        }
    }
    
}