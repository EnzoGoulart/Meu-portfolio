let body = document.getElementById('body')
let pagina2 = document.getElementById('pagina2')
pagina2.style.display = 'none'
let icones = document.getElementsByClassName('.icon')
let h1 = document.getElementById('h1')
let botaoInicio = document.getElementById('botaoInicial')
botaoInicio.addEventListener('click',() => {
    h1.style.animation = 'sumirH1 1s ease-in-out 1 forwards'
    botaoInicio.style.animation = 'sumirBotao1 1s ease-in-out 1 forwards'
    setInterval(() => {
        h1.style.display = 'none'
        botaoInicio.style.display = 'none'
        h1.style.animation = ''
        botaoInicio.style.animation = ''
        pagina2.style.display = 'block'
    }, 1000)
})