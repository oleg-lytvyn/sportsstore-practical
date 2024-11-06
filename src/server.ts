import { createServer } from "http";
import express, { Express } from "express";
import helmet from "helmet";
import { getConfig } from "./config";
import { createRoutes } from "./routes";
import cors from "cors";
import { createTemplates } from "./helpers";
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
const server = createServer(expressApp);
server.listen(port, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${port}`);
});

    // server.listen(port,
    //     () => console.log(`HTTP Server listening on port ${port}`));