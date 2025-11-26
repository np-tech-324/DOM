const para = document.querySelector('p')

const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText;

para.addEventListener('mouseenter',()=>{
    console.log("enter");
    

    int = setInterval(() => {
        
        const str = text.split('').map((char,index)=>{
            return character.split("")[Math.floor(Math.random()*character.length) ]
         }).join("")

        para.innerText = str
    }, 90);

})

para.addEventListener('mouseleave',()=>{
    clearInterval(int)
    para.innerText = text;
    console.log("leave");
    
})
