"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCatalogRoutes = void 0;
const createCatalogRoutes = (app) => {
    app.get("/", (req, resp) => {
        // resp.send("Hello, SportsStore Route");
        resp.render("index");
    });
    app.get("/err", (req, resp) => {
        throw new Error("Something bad happened");
    });
    app.get("/asyncerr", async (req, resp) => {
        throw new Error("Something bad happened asynchronously");
    });
};
exports.createCatalogRoutes = createCatalogRoutes;
