class chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            length:10,
            stiffness:0.4
            }
            this.chain = Constraint.create(options);
            World.add(world,this.chain);
        }
    
    display() 
    {
        var BodyA = this.chain.bodyA.position;
        var BodyB = this.chain.bodyB.position;

        var anchor1x = BodyA.x
        var anchor1y = BodyA.y
        var anchor2x = BodyB.x + this.offsetX
        var anchor2y = BodyB.y + this.offsetY
        line(anchor1x.x,anchor1y.y,anchor2x.x,anchor2y.y);
    }
    }