function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

//   фігура:
//      координати:
//          х,
//          у
function Figure() {
    Point.call(this);
    this.coordinates = [];
    this.addCoordinate = function(point) {
        this.coordinates.push(point);
    };
    this.getPerimeter = function() {
        var len = 0;
        if (this.coordinates.length > 1) {
            this.coordinates.forEach(function(el, ind, arr){
                if (el instanceof Point) {
                    if (ind + 1 < arr.length) {
                        len += Math.sqrt(Math.pow(arr[ind + 1].x - el.x, 2) + Math.pow(arr[ind + 1].y - el.y, 2));
                    } else {
                        len += Math.sqrt(Math.pow(el.x - arr[0].x, 2) + Math.pow(el.y - arr[0].y, 2));
                    }
                }
            });
        }

        return len;
    };
}
Figure.prototype = Object.create(Point.prototype);

var figure1 = new Figure();
figure1.addCoordinate(new Point(1,2));
figure1.addCoordinate(new Point(4,3));
figure1.addCoordinate(new Point(3,6));

//   багатокутник -> фігура:
//      вершини[координати],
//      периметр()
function Polygon() {
    Figure.call(this);
}
Polygon.prototype = Object.create(Figure.prototype);

var polygon1 = new Polygon();
polygon1.addCoordinate(new Point(1,1));
polygon1.addCoordinate(new Point(3,4));
polygon1.addCoordinate(new Point(5,4));
console.log('Polygon perimeter: ' + polygon1.getPerimeter());

//   прямокутник -> багатокутник:
//      довжина,
//      висота,
//      площа(),
//      периметр()
function Rectangle(width, height) {
    this.width = width || 0;
    this.height = height || 0;
    this.getPerimeter = function() {
        return 2 * this.width + 2 * this.height;
    };
    this.getSquare = function() {
        return this.width * this.height;
    };
}
Rectangle.prototype = Object.create(Polygon.prototype);

var rectangle1 = new Rectangle(5, 7);
console.log('Rectangle perimeter: ' + rectangle1.getPerimeter());
console.log('Rectangle square: ' + rectangle1.getSquare());

//   квадрат -> прямокутник:
//      довжинаСторони,
//      площа(),
//      периметр()
function Square(len) {
    this.len = len || 0;
    this.getSquare = function() {
        return Math.pow(this.len, 2);
    };
    this.getPerimeter = function() {
        return this.len * 4;
    };
}
Square.prototype = Object.create(Rectangle.prototype);

var square1 = new Square(7);
console.log('Square perimeter: ' + square1.getPerimeter());
console.log('Square square: ' + square1.getSquare());

//   трикутник -> фігура:
//      площа(),
//      периметр()
function Triangle() {
    Figure.call(this);
    this.getSquare = function() {
        var p = this.getPerimeter() / 2;
        var a = Math.sqrt(Math.pow(this.coordinates[1].x - this.coordinates[0].x, 2) + Math.pow(this.coordinates[1].y - this.coordinates[0].y, 2));
        var b = Math.sqrt(Math.pow(this.coordinates[2].x - this.coordinates[1].x, 2) + Math.pow(this.coordinates[2].y - this.coordinates[1].y, 2));
        var c = Math.sqrt(Math.pow(this.coordinates[0].x - this.coordinates[2].x, 2) + Math.pow(this.coordinates[0].y - this.coordinates[2].y, 2));

        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    };
}
Triangle.prototype = Object.create(Figure.prototype);

var triangle1 = new Triangle();
triangle1.addCoordinate(new Point(1,1));
triangle1.addCoordinate(new Point(3,4));
triangle1.addCoordinate(new Point(5,4));
console.log('Triangle perimeter: ' + triangle1.getPerimeter());
console.log('Triangle square: ' + triangle1.getSquare());

//   круг -> фігура:
//      радіус,
//      площа(),
//      периметр()
function Circle(r) {
    this.r = r || 0;
    this.getSquare = function() {
        return Math.PI * Math.pow(this.r, 2);
    };
    this.getPerimeter = function() {
        return 2 * Math.PI * this.r;
    };
}
Circle.prototype = Object.create(Figure.prototype);

var circle1 = new Circle(4);
console.log('Circle square: ' + circle1.getSquare());
console.log('Circle perimeter: ' + circle1.getPerimeter());
