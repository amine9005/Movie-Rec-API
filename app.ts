import express, { Application } from "express";

function createServer() {
  const app: Application = express();

  app.use("*", (req, res) => {
    res.status(404).json({
      error: "404 Route Not Found",
    });
  });

  return app;
}

export default createServer;
