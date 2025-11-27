const para = document.querySelector('p')

const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const text = para.innerHTML;

let iteration = 0;

para.addEventListener('mouseenter',()=>{
    
    function randomtext(){
        
        
        const str = text.split("").map((char,index)=>{
            if(index < iteration){
                return char
            }
            return character.split("")[Math.floor(Math.random()*52)]
        }).join("")

        iteration += 0.5

    para.innerHTML = str

}
setInterval(randomtext,30)

// randomtext()
})