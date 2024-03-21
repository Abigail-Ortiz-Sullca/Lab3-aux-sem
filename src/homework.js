(() => {
  
  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */
    // Usamos el método map para crear un nuevo arreglo con los números multiplicados por 5
    let multipliedByFive = numbers.map(num => num * 5);
    console.log(multipliedByFive);
  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */
  // Usamos el método sort para ordenar los nombres alfabéticamente
  let sortedNames = names.sort();
  console.log(sortedNames); 
  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  // Usamos el objeto Set para eliminar las letras repetidas y luego convertimos el Set de nuevo a un arreglo
  let uniqueData = [...new Set(data)];
  console.log(uniqueData); 
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
   // Creamos un objeto vacío para almacenar las cuentas de las letras
   let letterCounts = {};
   // Recorremos cada letra de la palabra
   for (let letter of largeWord) {
     // Si la letra ya existe en el objeto, incrementamos su cuenta, si no, la inicializamos a 1
     letterCounts[letter] = (letterCounts[letter] || 0) + 1;
   }
   console.log(letterCounts);
  
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
