/* Completa la función que tomando un array de strings
como argumento devuelva el más largo, en caso de que 
dos strings tenga la misma longitud deberá devolver el primero. */

const avengers = [
    'Hulk',
    'Thor',
    'IronMan',
    'Captain A.',
    'Spiderman',
    'Captain M.'
];

function findLongestWord(param) {

let masAlto = "0";
for (let i = 0; i < param.length; i++){
    if (param[i].length > masAlto.length){
    masAlto = param[i]
        }
    }
console.log(masAlto)
}

findLongestWord (avengers)