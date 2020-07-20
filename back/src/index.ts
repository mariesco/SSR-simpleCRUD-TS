import app from "./app";
import './database';

app.listen(app.get("port"), () =>
  console.log("server un port:", app.get("port"))
);
