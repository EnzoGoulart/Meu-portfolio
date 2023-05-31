let body = document.getElementById('body')
let pagina1 = document.getElementById('pagina1')
let pagina2 = document.getElementById('pagina2')
pagina2.style.display = 'none'
let icones = document.getElementsByClassName('.icon')
let h1 = document.getElementById('h1')
let botaoInicio = document.getElementById('botaoInicial')
let pag3 = document.getElementById('pagina3')
let botaoProjetos = document.getElementById('botaoProjetos')

let back = document.getElementById('divSpan1')

botaoInicio.addEventListener('click',() => {
    h1.style.animation = 'sumirH1 1s ease-in-out 1 forwards'
    botaoInicio.style.animation = 'sumirBotao1 1s ease-in-out 1 forwards'
    setTimeout(() => {
        h1.style.display = 'none'
        botaoInicio.style.display = 'none'
        h1.style.animation = ''
        botaoInicio.style.animation = ''
        pagina2.style.display = 'block'
    }, 1000)
})
botaoProjetos.addEventListener('click',()=>{
    pagina2.style.display = 'none'
    pag3.style.display = 'block'
})

back.addEventListener('click', ()=>{
    pag3.style.display = 'none'
    pagina2.style.display = 'block'
})