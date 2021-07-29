var arr = [6,8,3,1]
var sortArr = arr.sort(function(a,b){return a-b})
console.log(sortArr)
// var x = sortArr.length;
// var largestNumber = sortArr[x]
// console.log(largestNumber)
// var total = arr.reduce(function(a,b){
//     if(b >= a ){return a}
//     else {return b}
// },0)
// console.log(total)
//try catch fianlly
function Cat (weight){
    this.weight=weight;
}
var Tom = new Cat(5)
function catwWeight(){
    try{alertsr('this is error')}
    catch(err){
        console.log ('I made this error')
    }
}
catwWeight()
var s = 'agdfg'
//fisrt letter is a => return A
function checkLetter(s){
    let letter;
    if ('aeiuo'.includes(s[0])){
        return letter = 'A'
    }
}
checkLetter(s)
var splitTest = s.split('')
console.log(splitTest)
var names = 'naruto, sasuke, itachi'
var newName = names.split(',')
console.log(newName)