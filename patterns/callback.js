setTimeout(function (){
    console.log("Timer")
}, 5000)

function x(y){
    console.log('x')
}
x(function y(){
    console.log("y")
})