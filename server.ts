import { createServer } from "http";
import { createServer as createHttpsServer } from "https";
import { parse } from "url";
import next from "next";
import express from "express";
import { readFileSync } from "fs";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
  console.log(`Go to http://localhost:${port}/c to view errors in the console`);
});

const expressApp = express();

createHttpsServer(
  {
    key: readFileSync("/tmp/localhost.key"),
    cert: readFileSync("/tmp/localhost.crt"),
  },
  expressApp
).listen(9443, () => {});

expressApp.all("/*", (_, res) => res.end("It works!"));
