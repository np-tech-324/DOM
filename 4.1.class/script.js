var grow = 0
var btn = document.querySelector('button');
var h1 = document.querySelector('.bottom h1')
var inner = document.querySelector('.inner')
// console.log(inner);


btn.addEventListener('click',function(){
    
    setInterval(() => {
        h1.innerHTML = grow + "%"
        inner.style.width = grow + "%"
        grow++
    },50);
})

