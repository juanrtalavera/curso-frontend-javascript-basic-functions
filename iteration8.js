/* Crea una función que nos devuelva el número de veces
que se repite cada una de las palabras que lo conforma. */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      
      let repetirse=[];
      for (let i = 0; i < param.length; i++) {
        let cont=0;
          for (let j = 0; j < param.length; j++) {
              if (param[i]===param[j]) {
                  cont++;
              }
          }
        repetirse.push(cont);   

      }
      return repetirse;
  }

  console.log(repeatCounter(counterWords));