const INPUT = document.getElementById("peso");
INPUT.focus();
const ERROR = document.getElementById("error");
const CALCULAR = document.getElementById("calcular");

CALCULAR.addEventListener("click", ()=>{
    const PESO = INPUT.value;
    if(PESO > 0){
        ERROR.style.display = 'none';
        elegirMetodo(PESO);
    }else{
        ERROR.style.display = 'block';
    }
});

INPUT.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const PESO = INPUT.value;
        if(PESO > 0){
            ERROR.style.display = 'none';
            elegirMetodo(PESO);
        }else{
            ERROR.style.display = 'block';
        }
    }
});

function elegirMetodo(peso){
    if(peso <= 30){
        return calculoHS(peso);
    }else{
        return calculoSC(peso);
    }
}

function calculoHS(peso){
    let flujo = 0;
    if(peso <= 10){
        flujo = 100 * peso;
    }
    if(peso > 10 && peso < 20){
        flujo = ((peso - 10) * 50) + 1000;
    }
    if(peso > 20){
        flujo = ((peso - 20) * 20) + 1500;
    }
    const FLUJO_HORA = flujo / 24;
    const MANTENIMIENTO_MAS_MEDIO = FLUJO_HORA + (FLUJO_HORA / 2);
    const TABLA = '<h4>Holliday-Segar</h4><table> <thead> <tr> <th>Peso</th> <th>Volumen diario</th> <th>Mantenimiento</th> <th>m+m/2</th> </tr> </thead> <tbody> ' + 
        '<tr> <td>' + peso + ' Kg</td> <td>' + flujo.toFixed(2) + ' cc</td> <td>' + FLUJO_HORA.toFixed(2) + ' cc/hr</td> <td>' + MANTENIMIENTO_MAS_MEDIO.toFixed(2) + ' cc/hr</td>  </tbody> </table>';
    mostrarResultado(TABLA);
}

function calculoSC(peso){
    const PESO = parseFloat(peso);
    const FLUJO = (((PESO * 4) + 7) / (PESO + 90));
    const FLUJO_1500 = (FLUJO * 1500) / 24;
    const FLUJO_2000 = (FLUJO * 2000) / 24;
    const TABLA = '<h4>Superficie Corporal</h4><table> <thead> <tr> <th>Peso</th> <th>Mantenimiento * 1500</th> <th>Mantenimiento * 2000</th> </tr> </thead> <tbody> ' + 
        '<tr> <td>' + peso + ' Kg</td> <td>' + FLUJO_1500.toFixed(2) + ' cc/hr</td> <td>' + FLUJO_2000.toFixed(2) + ' cc/hr</td>  </tbody> </table>';
    mostrarResultado(TABLA);
}

function mostrarResultado(restultado){
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = restultado;
}