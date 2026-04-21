function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	
	colorMode(HSB) //色相:0-360，飽和度0-100，亮度 0-100
	for(var i =0;i<width;i+=50){
		var h = map(i,0,width,0,360)
		fill(h,mouseY/5,mouseX/5)
		ellipse(i,height/2,100)
		
	}
}

