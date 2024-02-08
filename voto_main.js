let resposta = document.getElementById('resposta')
let verificar = document.getElementById('verificar')

verificar.addEventListener(`click`, ()=>{ //ou function
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let titulo = Number(document.getElementById('titulo').value)

    console.log(nome,idade,titulo)
})
