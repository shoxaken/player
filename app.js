let doiracusor = document.querySelector('.doira-cursor')
let doira = document.querySelector('.doira')
let score = document.querySelector('.score')

let counter = 0

window.addEventListener('mousedown', e=>{
    let x = e.clientX
    let y = e.clientY
    doiracusor.style.top = `${y}px`
    doiracusor.style.left = `${x}px`
})

doira.addEventListener('mousedown', setCoordination)

const bodyX =  document.body.clientWidth
const bodyY =  document.body.clientHeight

setCoordination()
function setCoordination(){
    let randomX = Math.trunc(Math.random() * bodyX)
    let randomY = Math.trunc(Math.random() * bodyY)
    doira.style.top = `${randomY}px`
    doira.style.left  = `${randomX}px`
}


document.addEventListener('click' , ()=>{
    if(doiracusor.style.top == doira.style.top){
    counter++;
    setCoordination()

}
})

score.innerHTML = counter
