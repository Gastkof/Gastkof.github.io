alert("Hello World");
console.log("Hello Console")

var a ="gaston";
console.log(a)
a=12356;
console.log(a)
let dany= [];
console.log(dany)

const j = "hello world";
console.log(j)


var x=['TSLA','TEVA','GOOG'];
x.push('fiat')
var y= x.indexOf('fiat');
console.log(y);
var h = x.shift();
var l= x.unshift('APPLE')
console.log(x[0])

console.log(x[3])


////var x ={"name1":"gaston","2":"Danny"};

//console.log(x.name1)

// var x = function() {alert('in a nameless function');}
 //x.call();


var t = function(val){
  var  flag =val
    if(flag){

    for(var i=0;i<5;i++) {

        x.push(i);
        x[i]=parseInt(x[i])
    
    }}
    else{

        alert('wrong number')
    }

} 

t(false);



var f=()=>{


    try {
       // var i=5/0;
        new Error('division by zero'); }
        catch(err) {
        alert(err.message); }
}

f();

 for (xElement in x ) {
    console.log(xElement);
  console.log(  typeof(xElement))
 
  console.log(  typeof(xElement))

 }
// do {commands} while (condition)

function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
      if(x == "") throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5) throw "too low";
      if(x > 10) throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
  }