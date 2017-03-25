// Define Shape
function Shape(sides, x, y) {
  this.sides = sides;
  this.x = x;
  this.y = y;
}

// Define Quadrilateral
function Quadrilateral(x, y, sideOneLength, sideTwoLength, sideThreeLength, sideFourLength) {
  Shape.call(this, 4, x, y);
  this.sideOneLength = sideOneLength;
  this.sideTwoLength = sideTwoLength;
  this.sideThreeLength = sideThreeLength;
  this.sideFourLength = sideFourLength;
}

Quadrilateral.prototype = Object.create(Shape.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

Quadrilateral.prototype.perimeter = function() {
  return this.sideOneLength + this.sideTwoLength + this.sideThreeLength + this.sideFourLength;
}

// Define Rectangle
function Rectangle(x, y, width, height) {
  Quadrilateral.call(this, x, y, width, height, width, height);
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// Define Square
function Square(x, y, length) {
  Rectangle.call(this, x, y, length, length);
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// Add functions
Shape.prototype.move = function(x,y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.position = function() {
  return (this.x + "," + this.y);
};

// Create new square
square = new Square(1,1,3);

// Check properties
console.log(square.length);
// 3 - defined on Square

console.log(square.width);
// 3 - inherited from Rectangle

console.log(square.sideOneLength);
// 3 - inherited from Quadrilateral through Rectangle

console.log(square.position());
// 1,1 - from Shape

square.move(2,3); // from Shape
console.log(square.position());
// 2,3

console.log(square.area());
// 9 - from Rectangle
console.log(square.perimeter());
// 12 - from Quadrilateral

for (var prop in square) {
  console.log("square." + prop + " = " + square[prop]);
}

for (var prop in square) {
  if (square.hasOwnProperty(prop)) {
    console.log("square." + prop + " = " + square[prop]);
  }
}
