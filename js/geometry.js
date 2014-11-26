//   фігура:
//      координати:
//          х,
//          у
//
//   багатокутник -> фігура:
//      вершини[координати],
//      периметр()
//
//   прямокутник -> багатокутник:
//      довжина,
//      висота,
//      площа(),
//      периметр()
//
//   квадрат -> прямокутник:
//      довжинаСторони,
//      площа(),
//      периметр()
//
//   трикутник -> фігура:
//      площа(),
//      периметр()
//
//   круг -> фігура:
//      радіус,
//      площа(),
//      периметр()


function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

function Figure() {
    Point.call(this);
    this.coordinates = [];
    this.addCoordinate = function(point) {
        this.coordinates.push(point);
    }
}
Figure.prototype = Object.create(Point.prototype);

function Polygon() {
    Figure.call(this);

    this.perimetr = function() {
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
    }
}


var figure1 = new Figure();
figure1.addCoordinate(new Point(1,2));
figure1.addCoordinate(new Point(4,3));
figure1.addCoordinate(new Point(3,6));

var polygon1 = new Polygon();
polygon1.addCoordinate(new Point(1,1));
polygon1.addCoordinate(new Point(3,4));
polygon1.addCoordinate(new Point(5,4));
console.log(polygon1.perimetr());