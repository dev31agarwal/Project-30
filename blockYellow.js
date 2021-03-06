class BlockYellow{
    constructor(x, y, width, height){

        var options= {
            isStatic: false,
        }

        this.body= Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;
        this.visibility=255
    }

    display(){

        var pos=this.body.position;

        if(this.body.speed>10){
            push();
            this.visibility=this.visibility-5
            tint(255, this.visibility);
            World.remove(world, this.body);
            pop();
        }

        else{
            fill("yellow");
            rect(pos.x, pos.y, this.width, this.height); 
        }
    }
}