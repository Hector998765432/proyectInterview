const   express   = require("express"),
        cors      = require("cors"),
        fs        = require("fs");
const   app       = express();


app.use(cors());

/* Funcionalidad para nombrar las rutas como el directorio de */

var normalizedPath = require("path").join(__dirname, "modules/");
fs.readdirSync(normalizedPath).forEach(function (file) {
    console.log(".modules/" + file + "/router");
    app.use("/" + file, require("./modules/" + file + "/router"));
});

module.exports = app;