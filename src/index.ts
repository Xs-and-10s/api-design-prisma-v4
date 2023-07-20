import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

import app from "./server";

process.on("uncaughtException", (err) => {
  // handle uncaught callback error
  console.log(err);
});

process.on("unhandledRejection", (err) => {
  // handle uncaught promise rejection
  console.log(err);
});

app.listen(config.port, () => {
  console.log(`hello on http://localhost:${config.port}`);
});
