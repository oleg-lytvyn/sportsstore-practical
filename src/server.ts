import { createServer } from "http";
import express, { Express } from "express";
import helmet from "helmet";
import { getConfig } from "./config";
import { createRoutes } from "./routes";
import cors from "cors";
import { createTemplates } from "./helpers";
import { createErrorHandlers } from "./errors";
const port = getConfig("http:port", 5000);
const expressApp: Express = express();
expressApp.use(cors());
expressApp.use(helmet());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }))
expressApp.use(express.static("node_modules/bootstrap/dist"));
createTemplates(expressApp);
// expressApp.get("/", (req, resp) => {
//     resp.send("Hello, SportsStore");
// })
createRoutes(expressApp);
createErrorHandlers(expressApp);
const server = createServer(expressApp);
    server.listen(port,
        () => console.log(`HTTP Server listening on port ${port}`));
