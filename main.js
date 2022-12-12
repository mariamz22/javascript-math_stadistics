//Declaración de variables

//Cuadrado
const ladoC = document.querySelector('.ladoSquare');
const perimetroC = document.querySelector('.perimetro-cuadrado');
const areaC = document.querySelector('.area-cuadrado');
const valorC = document.querySelectorAll('.valor');

//Triangulo
const lado1 = document.querySelector('.lado1Triangle');
const lado2 = document.querySelector('.lado2Triangle');
const lado3 = document.querySelector('.lado3Triangle');
const altura = document.querySelector('.alturaTriangle');
const areaT = document.querySelector('.area-triangulo');
const perimetroT = document.querySelector('.perimetro-triangulo');


//Funciones

//Cuadrado
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

//Triangulo
lado3.addEventListener('change',()=>{

    if(lado1.value > 0 || lado2.value > 0 || lado3.value > 0){

        let v1 = Number(lado1.value);
        let v2 = Number(lado2.value);
        let v3 = Number(lado3.value);
        let alt = Number(altura.value);

        let suma = v1 + v2 + v3;
        let area = (v3 * alt) / 2;

        perimetroT.innerHTML = "El perímetro del triangulo es: " + suma;
        areaT.innerHTML =  "El área del triangulo es: " + area;
       
    }else{
        perimetroT.innerHTML = "El lado no puede ser 0";
        areaT.innerHTML =  "El lado no puede ser 0";
    }

})