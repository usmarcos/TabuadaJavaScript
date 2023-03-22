const[valor] = document.getElementsByName('valor')
const resultado = document.getElementById('resultado')

function gerar(){
    const tabuada = Number(valor.value)
    resultado.innerText=''
    for(let x=0; x<=10;x++){
        resultado.innerHTML += `<p>${x} x ${tabuada} = ${x * tabuada}</p>`
    }
}