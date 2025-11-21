var img = document.querySelector(".card img");
var love = document.querySelector(".ri-heart-3-line");

img.addEventListener("dblclick", function () {
    var int = setInterval(() => {
        love.style.opacity = 1;
        love.style.transform = 'translate(-50%,-50%) scale(1)'
    }, 500);
    setTimeout(() => {
        clearInterval(int)
    }, 1000);
});
