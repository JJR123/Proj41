class Umbrella{ 
    constructor(x,y){ 
        var options = {
        } 
        this.x=x;
		this.y=y;
        this.r=r; 
        
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
        this.image= loadImage("Sprites/Boy.png");
        World.add(world, this.body);

    }   

    display()
	{
			
			var drop=this.body.position;
			push()
			translate(drop.x, drop.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(44,246,248)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
    } 
}