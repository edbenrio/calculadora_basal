console.log(cualEsElMayor(5000,54,300));

function cualEsElMayor(num1, num2, num3){
    if(num1 >= num2){
        if(num1 >= num3){
            return num1 + ' es mayor';
        }
    }else{
        if (num2 >= num1){
            if(num2 >= num3){
                return num2 + ' es mayor';
            }else{
                return num3 + ' es mayor'
            }
        }
    }
}