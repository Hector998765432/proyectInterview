const   express       = require("express"),
        cors          = require("cors"),
        fs            = require("fs");
const   app           = express();
const   bodyParser    = require('body-parser')


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Funcionalidad para nombrar las rutas como el directorio de */

var normalizedPath = require("path").join(__dirname, "modules/");
fs.readdirSync(normalizedPath).forEach(function (file) {
    console.log(".modules/" + file + "/router");
    app.use("/" + file, require("./modules/" + file + "/router"));
});

module.exports = app;