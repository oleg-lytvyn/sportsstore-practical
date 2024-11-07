"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const helpers_1 = require("./helpers");
const port = (0, config_1.getConfig)("http:port", 5000);
const expressApp = (0, express_1.default)();
expressApp.use((0, cors_1.default)());
expressApp.use((0, helmet_1.default)());
expressApp.use(express_1.default.json());
expressApp.use(express_1.default.urlencoded({ extended: true }));
expressApp.use(express_1.default.static("node_modules/bootstrap/dist"));
(0, helpers_1.createTemplates)(expressApp);
// expressApp.get("/", (req, resp) => {
//     resp.send("Hello, SportsStore");
// })
(0, routes_1.createRoutes)(expressApp);
const server = (0, http_1.createServer)(expressApp);
server.listen(port, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// server.listen(port,
//     () => console.log(`HTTP Server listening on port ${port}`));
