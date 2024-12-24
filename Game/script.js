const circle = document.getElementById('circle');

const right = document.getElementById('btnr');
const left = document.getElementById('btnl');
const top1 = document.getElementById('btnt');
const buttom = document.getElementById('btnb');


left.addEventListener("click", function(){
    circle.style.backgroundColor = "black";
    const curentleft = parseInt(circle.style.left) || 0;
    circle.style.left = curentleft - 20 + "px";
})

right.addEventListener("click", function(){
    circle.style.backgroundColor = "blue";
    const curentleft = parseInt(circle.style.left) || 0;
    circle.style.left = curentleft + 20 + "px";

})

top1.addEventListener("click", function(){
    circle.style.backgroundColor = "aqua";
    const curentleft = parseInt(circle.style.top) || 0;
    circle.style.top = curentleft - 20 + "px";

})

buttom.addEventListener("click", function(){
    circle.style.backgroundColor = "purple";
    const curentleft = parseInt(circle.style.top) || 0;
    circle.style.top = curentleft + 20 + "px";

})
buttom.addEventListener("keydown", function(){
    circle.style.backgroundColor = "purple";
    const curentleft = parseInt(circle.style.top) || 0;
    circle.style.top = curentleft + 20 + "px";
})

document.addEventListener("keydown", function(event) {
    const circle = document.getElementById("circle");
    const currentTop = parseInt(circle.style.top) || 0;

    if (event.key === "ArrowDown") {
        circle.style.top = currentTop + 20 + "px";
        circle.style.backgroundColor = ("purple");
    }
});


document.addEventListener("keydown", function(event) {
    const circle = document.getElementById("circle");
    const currentTop = parseInt(circle.style.top) || 0;

    if (event.key === "ArrowUp") {
        circle.style.top = currentTop - 20 + "px";
        circle.style.backgroundColor = ("aqua");
    }
});

document.addEventListener("keydown", function(event) {
    const circle = document.getElementById("circle");
    const currentleft = parseInt(circle.style.left) || 0;

    if (event.key === "ArrowLeft") {
        circle.style.left = currentleft - 20 + "px";
        circle.style.backgroundColor = ("black");
    }
});

document.addEventListener("keydown", function(event) {
    const circle = document.getElementById("circle");
    const currentleft = parseInt(circle.style.left) || 0;

    if (event.key === "ArrowRight") {
        circle.style.backgroundColor = ("blue");
        circle.style.left = currentleft + 20 + "px";
    }
});

document.addEventListener("keydown", function(event) {
    const a = document.getElementById("apress");
    console.log("a has been pressed")
    if (event.key === "a"&& a.style.display === "none") {
       a.style.display = ("block");
    }
    else{
        a.style.display = ("none");
    }
});





