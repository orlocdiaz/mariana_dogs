const {Router}= require("express");
const getTemperamentsHandler = require("../handlers/TemperamentsHandler");

const TemperamentsRoutes = Router();

TemperamentsRoutes.get("/", getTemperamentsHandler);

module.exports= TemperamentsRoutes;