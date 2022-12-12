//Declaración de variables

let ladoC = document.querySelector('.ladoSquare');
let perimetroC = document.querySelector('.perimetro-cuadrado');
let areaC = document.querySelector('.area-cuadrado');
let valorC = document.querySelectorAll('.valor');

ladoC.addEventListener('change',()=>{
    if (ladoC.value > 0){
        perimetroC.innerHTML = "El perímetro del cuadrado es: " + ladoC.value * 4;
        areaC.innerHTML =  "El área del cuadrado es: " + ladoC.value * ladoC.value;
    
        for(i=0; i < valorC.length;i++){
            valorC[i].innerHTML = ladoC.value
        }
    
    } else{
        perimetroC.innerHTML = "El lado no puede ser 0";
        areaC.innerHTML =  "El lado no puede ser 0";
    }

})