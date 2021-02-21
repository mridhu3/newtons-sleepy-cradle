class bob{
    constructor(x,y,radius){
        var options ={ isStatic:false,
            
            restitution :1,
            friction :0,
            density :7.8
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = 100;
    
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
    
        push();
        translate(pose.x,pose.y)
        fill(230);
        ellipse(0,0,this.radius);
        pop();
        
    }

    }
