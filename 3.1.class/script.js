const sentences = [
  "The sky is blue",
  "Cats sleep all day",
  "Music makes life better",
  "Time heals all wounds",
  "Please close the door",
  "Dream big and work",
  "Stars shine at night",
  "Always trust your instincts",
  "Keep moving toward goals",
  "Happiness comes from within"
];

var main = document.querySelector('main')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){
    var h1 = document.createElement('h1')
    var x = Math.floor(Math.random()*100)
    var y = Math.floor(Math.random()*100)
    var z = Math.floor(Math.random()*100)
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    var a = Math.floor(Math.random()*sentences.length)

    h1.innerHTML = sentences[a]
    h1.style.position = "absolute" 
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.rotate = x+'deg'
    h1.style.color = `rgb(${c1},${c2},${c3})`
    main.appendChild(h1)

})