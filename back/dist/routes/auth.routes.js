"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express_1.Router();
router.get("/tasks", user_controller_1.allTasks);
router.post("/addtask", user_controller_1.addTask);
router.put("/modiftask", user_controller_1.modifTask); //Terminar ruta de modif, no esta testeada aun
router.delete("/byetask", user_controller_1.byeTask);
exports.default = router;
