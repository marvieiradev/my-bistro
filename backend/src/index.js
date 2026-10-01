import express from "express";
import cors from "cors";
import { Mongo } from "./database/mongo.js";
import { config } from "dotenv";
import authRouter from "./auth/auth.js";
// Essas duas linhas abaixo são para evitar o erro de conexão do Mongo com o DNS no Windows (querySrv ECONNREFUSED).
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

config();

async function main() {
  const hostname = "localhost";
  const port = 3000;

  const app = express();
  const mongoConnection = await Mongo.connect({
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
    mongoDbName: process.env.MONGO_DB_NAME,
  });
  console.log(mongoConnection);
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: "Welcome to the My Bistro!",
    });
  });

  app.use("/auth", authRouter);

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
main();
