"use strict";
//POR ACA EMPEZAMOS, POR APP.TS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm i express cors mongoose morgan
//npm i -D typescript tsc-watch @types/cors @types/express @types/mongoose @types/morgan
//npx tsc --init --> Te genera el tsconfig.json (recordar poner es6, DESCOMENTAR EL "outDir" y poner "./dist", y descomentar "rootDir": y poner "./src")
//"cd /src" y despues => mkdir config controllers middlewares models routes
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
//Inicializaciones
const app = express_1.default();
//Configuraciones
app.set("port", process.env.PORT || 3300);
//Middlewares
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//Routes
app.get("/", (req, res) => {
    res.send(`La api esta en http://localhost:${app.get("port")}`);
});
app.use(auth_routes_1.default);
exports.default = app;
