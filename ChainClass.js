class ChainClass{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
       if(this.chainClass.bodyA)
       {
        var pointA = this.chainClass.bodyA.position;
        var pointB = this.chainClass.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
   
}