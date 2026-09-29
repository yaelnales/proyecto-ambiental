const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://yaelnales98_db_user:Nbytq8qUW3teSBGS@cluster0.fa92syt.mongodb.net/?appName=Clouter0";




// Configuración de Handlebars
app.set("view engine", "hbs");
app.set("views", __dirname);

// Archivos estáticos (CSS)
app.use(express.static(__dirname));

// Leer datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mostrar index.hbs
app.get("/", (req, res) => {
    res.render("index");
});

// Recibir formulario
app.post("/registro", (req, res) => {
    const {
        nombre,
        curso,
        material,
        cantidad,
        mensaje
    } = req.body;

    console.log("Nuevo registro:");
    console.log(req.body);

        res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Registro Guardado</title>
<style>
body{
    font-family: Arial, sans-serif;
    background:#e8f5e9;
    padding:40px;
}
.card{
    max-width:600px;
    margin:auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}
h1{
    color:green;
}
</style>
</head>
<body>
<div class="card">
<h1>♻️ Registro guardado correctamente</h1>
<p><b>Nombre:</b> ${nombre}</p>
<p><b>Curso:</b> ${curso}</p>
<p><b>Material:</b> ${material}</p>
<p><b>Cantidad:</b> ${cantidad}</p>
<p><b>Mensaje:</b> ${mensaje}</p>
<a href="/">Volver al formulario</a>
</div>
</body>
</html>
`);
});

app.listen(PORT, () => {
    console.log(`Campaña Ambiental disponible en http://localhost:${PORT}`);
});