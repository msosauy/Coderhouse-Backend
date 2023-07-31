const fs = require("fs");

const path = "sampleFIles/ejemplo.txt";

fs.writeFileSync(path, "Hola, texto creado con File System.");

if (fs.existsSync(path)) {
  let fileContent = fs.readFileSync(path, "utf-8");
  console.log(fileContent);

//   fs.appendFileSync(path, "Mas contenido agregado con File System");
//   fileContent = fs.readFileSync(path, "utf-8");
//   console.log(fileContent);

//   fs.unlinkSync("sampleFIles/ejemplo.txt");
}
