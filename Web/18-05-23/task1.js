class Rectangle {
  constructor(height,width) {
    this.h = height;
    this.w = width;
  }
  getArea(){
      return this.w*this.h;
  }
  getPerimeter(){
      return (this.w+this.h)*2;
  }
  set width(w){
     w > 0 ? this.w=w : console.log('Invalid width value. Width must be a positive number.');
  }
  set height(h){
      h > 0 ? this.h=h : console.log('Invalid height value. Height must be a positive number.');
  }
  }
const rectangle = new Rectangle(5, 10);
console.log('Area:', rectangle.getArea());
console.log('Perimeter:', rectangle.getPerimeter());
rectangle.width = -25;
rectangle.height = 0;
console.log('Updated Area:', rectangle.getArea());
console.log('Updated Perimeter:', rectangle.getPerimeter());
