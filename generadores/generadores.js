function* serie(i) {
  console.log("y1");
  yield i;
  console.log("y2");
  yield i + 5;
  console.log("y3");
  yield i + 10;
}

console.log("GENRERADOR....");
const a = serie(50);
console.log(a.next()); //imprime 50
console.log(a.next()); //imprime 55
console.log(a.next()); //imprime 60

/*
Esto sucede porque el valor de i no se persiste pero
si se persiste los yield en los que se encuentra la 
ejecucion de la funcion generadora

*/
