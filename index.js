//Zona de Entradas
var metrosCuadrados = 0;
var tipoDePredio = 0; //Apartamento
var administracion = 0;
var cuotaDeAseo = 0;
var genero = '';
var edad = 0;
var derechoGym = 0;
//Zona del Proceso
//Solicita Información
//Ingresar el tipo de predio
tipoDePredio = parseInt(prompt("Ingrese el tipo de predio"));
//Ingresar los metros cuadrados
metrosCuadrados = parseInt(prompt("Ingrese los metros cuadrados"));
//Invocar  a la funcion calcularAdministracion
administracion = calcularAdministracion(
    metrosCuadrados, tipoDePredio
);
//Invocar  a la funcion calcularCuotaDeAseo
cuotaDeAseo = calcularCuotaDeAseo( 
    administracion, metrosCuadrados);
//Process: cuota del Gym
genero = prompt("Ingrese el Género");
edad = prompt("Ingrese la edad");
//Invocar  a la funcion derechoGym
derechoGym = calcularDerechoGym( 
    genero, edad );
//Zona de Salida
alert("El valor de la administración es " + administracion);
alert('El valor de la cuota de aseo es ' + cuotaDeAseo);
alert("El valor del derecho de gimnasio es " + derechoGym);
//Función para cacular la administración
function calcularAdministracion(MT, T) {
    //Bloque de decisión según tipo de predio.
    if (T === 0) {
        console.log("El predio es una casa");
        return (MT * 1500 + 100000);
    } else if (T === 1) {
        console.log("El predio es una apartamento");
        return (MT * 1500 + 50000);
    } else {
        console.log("No se ingresó un predio correcto");
        return 0;
    }

}
//Función para cacular la cuota de aseo
function calcularCuotaDeAseo(A,MT) {
   return ((A*0.10) + (MT*1000));
}
//Funcion para calcular derechos del gym
function calcularDerechoGym (genero, edad){
    if(genero === 'M'){
       if (edad <10){
           return 0;
       } 
       else if((edad >= 10) && (edad<20)){
          return 20000;
       }
       else if((edad >= 20) && (edad<40)){
        return 15000;
        }
    else if (genero === 'F'){
        
    }
        
    }
      
    }