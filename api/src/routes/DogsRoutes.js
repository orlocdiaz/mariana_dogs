const { Router } = require("express");
const { getDogsDetailHandler, getDogsHandler } = require("../handlers/DogsHandler");
const postDogsHandler = require("../handlers/postDogsHandler");

const DogsRoutes= Router();

DogsRoutes.get("/:id", getDogsDetailHandler);
DogsRoutes.get("/", getDogsHandler);
DogsRoutes.post("/", postDogsHandler);


module.exports = DogsRoutes;
