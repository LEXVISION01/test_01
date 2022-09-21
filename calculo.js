window.onload= ()=>{
    let button = document.querySelector("#botao");

    button.addEventListener("click", calcularIMC);
};

function calcularIMC() {
 let altura = parseInt(document.querySelector("#altura").value);


 let peso = parseInt(document.querySelector("#peso").value);

 let result = document.querySelector("#resultado");

 if(altura === "" || isNaN(altura))
    result.innerHTML = "Informe um valor valido";

 else if(altura === "" || isNaN(altura))
    result.innerHTML = "Informe um valor valido";

 else {
    let imc = (peso / ((altura*altura)/10000)).toFixed(2);

    if(imc <18.6) result.innerHTML='Abaixo do peso';

    else if (imc >= 18.6 && imc < 24.9)result.innerHTML = 'Normal';

    else result.innerHTML = 'Sobrepeso';
 }
}