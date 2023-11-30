const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");


console.clear();

console.log(process.argv);

console.log(
  "base: yargs",
  argv.base + "\n" + "listar: yargs",
  argv.listar + "\n" + "hasta: yargs",
  argv.hasta
);

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
