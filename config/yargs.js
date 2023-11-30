const argv = require("yargs")
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.l)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })

  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "Hasta donde quieres la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.h)) {
      throw "La base tiene que ser un número";
    }
    return true;
  })

  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;


  module.exports = argv;