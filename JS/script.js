function formataAltura(altura){
    return altura.replace(",",".")
}
function formataIMC(imc){
    return imc.replace(",",".")
}
function calcular(){
    peso = inputPeso.value
    altura = inputAltura.value

    if(peso == "" || altura == ""){
        resultado.innerHTML = "<p> por favor, preecha os dados.</p>"
    }else{
        imc = (peso / (formataAltura(altura) ** 2)).toFixed(2)
        
        if(imc < 17){
            msg = "muito abaixo do peso ideal";
        }else if(imc >= 17 && imc <= 18.4){
            msg = "abaixo do peso ideal"
        }else if(imc >= 18.5 && imc <= 24.99){
            msg = "com peso normal"
        }else if(imc >= 25 && imc <= 29.99){
            msg = "acima do peso"
        }else if(imc >= 30 && imc <= 34.99){
            msg = "com obesidade nivel 1"
        }else{
            msg = "com obesidade nivel 2"
        }
        resultado.innerHTML = `<p> seu IMC é: ${formataIMC(imc)} ,e voce esta ${msg}.</p>`
    }
        
}


 
