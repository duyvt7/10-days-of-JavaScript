//named class
// class rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }
// }
// //unnamed class
// console.log(rectangle .name)
// let rectangle2 = class {
//     constructor(height,width){
//         this.height=height
//         this.width=width
//     }
// }
//prototype method
class rectangle {
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get area(){
        return this.calArea()
    }
    calArea(){
        return this.width*this.height
    }
}
var square = new rectangle(3,5)
console.log(square.area)