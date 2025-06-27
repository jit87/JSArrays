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

//Uso de .every()
const todos = aleatorios.every(elem => typeof elem === "number");   
console.log(todos);  //Devuelve false

//Uso de .reduce()
const suma = aleatorios.reduce((acumulador, elem) => {
    if (typeof elem === "number") {
        return acumulador + elem;
    }
    return acumulador;
}, 0);
console.log(suma);  //Devuelve 8.8

//Uso de .find()
const encontrado = aleatorios.find(elem => typeof elem === "string");       
console.log(encontrado);  //Devuelve "b"

//Uso de .findIndex()
const indice = aleatorios.findIndex(elem => typeof elem === "string");
console.log(indice);  //Devuelve 2

//Uso de .includes()
const incluye = aleatorios.includes(5);
console.log(incluye);  //Devuelve true

//Uso de .indexOf()
const indiceDe5 = aleatorios.indexOf(5);        
console.log(indiceDe5);  //Devuelve 5

//Uso de .lastIndexOf()
const ultimoIndiceDe5 = aleatorios.lastIndexOf(5);
console.log(ultimoIndiceDe5);  //Devuelve 5

//Uso de .join()
const cadena = aleatorios.join(", ");
console.log(cadena);  //Devuelve "1, 2, b, 878ga78dda, 1.8, 5"

//Uso de .sort()
const ordenados = aleatorios.slice().sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a - b;
    }
    return typeof a === "number" ? -1 : 1; // Números al principio
});
console.log(ordenados);  //Devuelve [ 1, 1.8, 2, 5, "b", "878ga78dda" ]

//Uso de .reverse()
const invertidos = aleatorios.reverse();
console.log(invertidos);  //Devuelve [ 5, 1.8, "878ga78dda", "b", 2, 1 ]

//Uso de .splice()
const spliced = aleatorios; //Hacemos una copia para no modificar el original
spliced.splice(2, 2, "nuevo1", "nuevo2"); //Elimina 2 elementos desde el índice 2 y añade 2 nuevos
console.log(spliced);  //Devuelve [ 1, 2, 'nuevo1', 'nuevo2', 1.8, 5 ]

//Uso de .slice()
const cortado = aleatorios.slice(1, 4); 
console.log(cortado);  //Devuelve [ 2, 'b', '878ga78dda' ] , (array original: [1,2,"b","878ga78dda",1.8, 5])

//Uso de .concat()
const concatenado = aleatorios.concat([10, 20]);
console.log(concatenado);  //Devuelve [ 1, 2, "b", "878ga78dda", 1.8, 5, 10, 20 ]

//Uso de .push()    
aleatorios.push(100);
console.log(aleatorios);  //Devuelve [ 1, 2, "b", "878ga78dda", 1.8, 5, 100 ]

//Uso de .pop()
const eliminado = aleatorios.pop();
console.log(eliminado);  //Devuelve 100
console.log(aleatorios);  //Devuelve [ 1, 2, "b", "878ga78dda", 1.8, 5 ]

//Uso de .shift()
const primerEliminado = aleatorios.shift(); // (array original: [1,2,"b","878ga78dda",1.8, 5])
console.log(primerEliminado);  //Devuelve 1
console.log(aleatorios);  //Devuelve [ 2, "b", "878ga78dda", 1.8, 5 ]

//Uso de .unshift()
aleatorios.unshift("nuevoInicio");    
console.log(aleatorios);  //Devuelve [ 'nuevoInicio', 2, 'b', '878ga78dda', 1.8, 5 ]
