
const calcular = document.getElementById('calcular')


function imc(){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome.value !=='' && altura !=='' && peso !==''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso'
        }else if(valorIMC < 24){
            classificacao = 'com o peso idela. Parabéns'
        } else if(valorIMC < 29){
            classificacao = 'com sobrepeso'
        }else if(valorIMC < 34){
            classificacao = 'com obesidade grau I'
        }else if(valorIMC < 39){
            classificacao = 'com obesidade grau II'
        }else{
            classificacao = 'com obesidade grau III. CUIDADO!'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`


    }else{
        alert('Preencha todos os campos')
    }
    
}

calcular.addEventListener('click', imc)



