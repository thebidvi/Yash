
console.log(sq(2));

function greet(name,cb){
console.log("Hello"+ name + "!");
cb();
}
function gdb(){
    console.log("Goodbye");
}
greet("Yash",gdb);