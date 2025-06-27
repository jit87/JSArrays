//Métodos de vectores en JS
const aleatorios = [1,2,"b","878ga78dda",1.8, 5];

//Uso de .some()
const algunos = aleatorios.some(elem => elem == 5); 
console.log(algunos);  //Devuelve true

//Uso de .filter()
const filtrados = aleatorios.filter(elem => elem < 5); 
console.log(filtrados); //Devuelve [ 1, 2, 1.8 ]

//Uso de .map()
const mapeados = aleatorios.map(elem => elem * 2);
console.log(mapeados);  //Devuelve [ 2, 4, NaN, NaN, 3.6, 10 ]



