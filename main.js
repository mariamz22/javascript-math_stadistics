//Declaración de variables

//Cuadrado
const ladoC = document.querySelector('.ladoSquare');
const perimetroC = document.querySelector('.perimetro-cuadrado');
const areaC = document.querySelector('.area-cuadrado');

//Triangulo
const lado1 = document.querySelector('.lado1Triangle');
const lado2 = document.querySelector('.lado2Triangle');
const lado3 = document.querySelector('.lado3Triangle');
const altura = document.querySelector('.alturaTriangle');
const areaT = document.querySelector('.area-triangulo');
const perimetroT = document.querySelector('.perimetro-triangulo');

//Circulo
const radioC = document.querySelector('.radio');
const circunferencia = document.querySelector('.circunferencia');
const areaCircle = document.querySelector('.area-circulo');

//Funciones

//Cuadrado
ladoC.addEventListener('change',()=>{
    if (ladoC.value > 0){

        let lado = Number(ladoC.value);            
        perimetroC.innerHTML = "El perímetro del cuadrado es: " + lado * 4;
        areaC.innerHTML =  "El área del cuadrado es: " + lado ** 2;
                
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

//Circulo
radioC.addEventListener('change',()=>{
    if (radioC.value > 0){

        let rad = Number(radioC.value);  
        diametro = rad * 2;   
        radCuad = rad ** 2;       
        circunferencia.innerHTML = "La circunferencia es: " + diametro * Math.PI;
        areaCircle.innerHTML =  "El área del círculo es: " + radCuad * Math.PI;
                
    } else{
        circunferencia.innerHTML = "El radio no puede ser 0";
        areaCircle.innerHTML =  "El radio no puede ser 0";
    }
    
})