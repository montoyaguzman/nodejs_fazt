const fs = require("fs");

fs.writeFile("./texto", "linea", function(err) {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado");
});

console.log("ultima linea de codigo...");


/*
SINCRONIA - CODIGO BLOQUEANTE
const users = query('SELECT * FROM users')

*/

/*
ASICRONIA
query('SELECT * FROM users'), function(err, users) {
  if (err) {
    console.log(err);
  }
  if (users) {

  }
})

*/