var div = document.querySelector("div")
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var a = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)
    var c = Math.floor(Math.random()*256)

    div.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
})