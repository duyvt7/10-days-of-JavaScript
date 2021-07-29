class rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
    }
    calArea(){
        return this.width * this.height
    }
}
var Rectangle = new rectangle(5,6)
console.log(Rectangle.calArea())
class polygon {
    constructor(...sides){
        this.sides=sides;
    }
    perimeter(){
        return this.sides.reduce(function(a,b){
            return a+b
        })
    }

}
var squares = new polygon(4,4,4,4)
console.log(squares.perimeter())