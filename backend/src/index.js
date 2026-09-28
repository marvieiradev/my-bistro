import express from "express";
import cors from "cors";

async function main() {
  const hostname = "localhost";
  const port = 3000;

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send({
      success: true,
      statusCode: 200,
      body: "Welcome to the My Bistro!",
    });
  });

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}
main();
