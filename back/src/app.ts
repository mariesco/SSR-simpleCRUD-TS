//POR ACA EMPEZAMOS, POR APP.TS

//npm i express cors mongoose morgan

//npm i -D typescript tsc-watch @types/cors @types/express @types/mongoose @types/morgan

//npx tsc --init --> Te genera el tsconfig.json (recordar poner es6, DESCOMENTAR EL "outDir" y poner "./dist", y descomentar "rootDir": y poner "./src")

//"cd /src" y despues => mkdir config controllers middlewares models routes
import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRoutes from './routes/auth.routes'

//Inicializaciones
const app = express();

//Configuraciones
app.set("port", process.env.PORT || 3300);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send(`La api esta en http://localhost:${app.get("port")}`);
});

app.use(authRoutes);


export default app;