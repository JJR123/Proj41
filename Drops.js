class Drops{ 
    constructor(x,y){ 
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        } 
        this.x=x;
		this.y=y;
        this.r=r; 
        
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

    } 
    display()
	{
            stroke("cyan");
            line(x,y,x,y+10); 

        
			var drop=this.body.position;
			push()
			translate(drop.x, drop.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(44,246,248)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
    }
    update(){ 
      /* drop.X.setPosition=100; 
        drop.Y.setPosition=100;
    */
    } 

    
    
} 