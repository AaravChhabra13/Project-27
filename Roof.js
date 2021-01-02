class Roof {

    constructor(x,y,width,height){

        var opt={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
     }

     display(){
         var pos=this.body.position;

         push();
         translate(pos.x,pos.y);
         rectMode(CENTER);
         fill("silver");

         rect(0,0,this.width,this.height);
         pop();

     }
}