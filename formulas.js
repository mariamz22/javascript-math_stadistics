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

//Triangulo Isósceles
const ladoIs = document.querySelector('.ladoTI');
const baseIs = document.querySelector('.baseT');
const alturaTI = document.querySelector('.altura');

//Trinangulo Escaleno
const lado1Esc = document.querySelector('.lado1Esc');
const lado2Esc = document.querySelector('.lado2Esc');
const baseEs = document.querySelector('.baseEsc');
const alturaEsc = document.querySelector('.alturaEsc');

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
        diametro = rad * 2 * Math.PI;   
        radCuad = rad ** 2 * Math.PI;       
        circunferencia.innerHTML = "La circunferencia es: " + diametro.toFixed(2);
        areaCircle.innerHTML =  "El área del círculo es: " + radCuad.toFixed(2);
        
    } else{
        circunferencia.innerHTML = "El radio no puede ser 0";
        areaCircle.innerHTML =  "El radio no puede ser 0";
    }
    
})

//Triángulo Isósceles

baseIs.addEventListener('change',()=>{
    let ladoTr = Number(ladoIs.value);
    let baseTr = Number(baseIs.value);
    
    if(ladoTr > 0 && ladoTr != baseTr && baseTr > 0){
        
        
        let ladoCuadrado = Math.pow(ladoTr,2);
        let baseCuadrada = Math.pow(baseTr,2);
        let alturaTr = Math.sqrt(ladoCuadrado-baseCuadrada/4);
        
        alturaTI.innerHTML = " La altura del triángulo es " + alturaTr.toFixed(2);
        
    }else if(ladoTr == baseTr){
        alturaTI.innerHTML = "El lado no puede ser igual a la base" ;
    }else{
        alturaTI.innerHTML = "El lado o la base no pueden ser 0" ;
    }
})

//Triangulo Escaleno
baseEs.addEventListener('change', ()=>{
    let lado1Es =  Number(lado1Esc.value);
    let lado2Es =  Number(lado2Esc.value);
    let baseEsc =  Number(baseEs.value);
    
    if(lado1Es > 0 && lado2Es > 0 && baseEsc > 0 ||
        lado1Es != lado2Es ||  lado2Es != baseEsc ||
        lado1Es != baseEsc){
            
            let semiPerimetro = (lado1Es + lado2Es + baseEsc) / 2;
            let sA = semiPerimetro - baseEsc;
            let sB = semiPerimetro - lado1Es;
            let sC = semiPerimetro - lado2Es;
            let raiz = semiPerimetro * sA * sB * sC;
            let altura = 2 / baseEsc * Math.sqrt(raiz);
            
            alturaEsc.innerHTML = "La altura del triángulo escaleno es " + altura;
            
        }else if(lado1Es == 0 || lado2Es == 0 || baseEsc == 0){
            alturaEsc.innerHTML = "Las medidas no pueden ser 0";

        }else if(lado1Es == lado2Es ||  lado2Es == baseEsc || lado1Es == baseEsc){
            alturaEsc.innerHTML = "Los lados no pueden ser iguales";
        }
        
    })