const CALCULAR = document.getElementById("calcular");
CALCULAR.addEventListener("click", ()=>{
    const ERROR = document.getElementById("error");
    
    const INPUT = document.getElementById("peso");
    const PESO = INPUT.value;
    if(PESO > 0){
        ERROR.style.display = 'none';
        const restultado = elegirMetodo(PESO);
        mostrarResultado(restultado);
    }else{
        ERROR.style.display = 'block';
    }

    function elegirMetodo(peso){
        if(peso <= 30){
            return calculoHS(peso);
        }else{
            return calculoSC(peso);
        }
    }

    function calculoHS(peso){
        if(peso <= 10){
            return 100 * peso;
        }
        if(peso > 10 && peso < 20){
            return ((peso - 10) * 50) + 1000;
        }
        if(peso > 20){
            return ((peso - 20) * 20) + 1500;
        }
    }

    function calculoSC(peso){
        return ( (peso * 4) + 7) / (peso + 90)
    }

    function mostrarResultado(restultado){
        const h3 = document.getElementById("resultado");
        h3.innerText = restultado + 'cc / día';
        console.log(restultado);
    }
});