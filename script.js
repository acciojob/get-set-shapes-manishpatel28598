//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle{
	constructor(side){
		super(side,side);
		this.side = side;
	}
	getPerimeter(){
		return this.side*4;
	}
}

const square = new Square(7);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
