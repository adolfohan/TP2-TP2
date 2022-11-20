import * as ms from "../scripts/ms.js";
import * as mac from "../scripts/mac.js";
import * as maptc from "../scripts/maptc.js";
import * as mapaa from "../scripts/mapaa.js";

let rutaJson = "./package.json";
//let rutaTxt = "./info.txt";


try {
  ms.crearArchivoTxtDesdeArchivoJson(rutaJson, "./text1.txt");
} catch (error) {
  console.log(error.message);
}

try {
  mac.crearArchivoTxtDesdeArchivoJson(rutaJson, "./text2.txt");
} catch (error) {
  console.log(error.message);
}

maptc
  .crearArchivoTxtDesdeArchivoJson(rutaJson, "./text3.txt")
  .then((info) => console.log(info))
  .catch((error) => console.log(error));

mapaa.crearArchivoTxtDesdeArchivoJson(rutaJson, "./text4.txt");
