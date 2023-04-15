const perguntas = document.getElementsByClassName('perguntas')
const respostas = document.getElementsByClassName('respostas')

const showText = (pergunta,resposta,display) => {
    pergunta.innerHTML = pergunta.textContent.toUpperCase()
    let toggle = false
    if(display == 'block') {
        resposta.innerHTML = resposta.textContent.toUpperCase()
    }
    pergunta.addEventListener('click',() => {
        toggle = !toggle
        if(toggle) {
            resposta.style.display = display
    
        }else {
            resposta.style.display = 'none'
        }
    })
}

for(let i = 0;i < perguntas.length;i++) {
    showText(perguntas.item(i),respostas.item(i),'flex')
}
