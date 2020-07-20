import { Router } from "express";
import {
  allTasks,
  addTask,
  modifTask,
  byeTask,
} from "../controllers/user.controller";

const router = Router();

router.get("/tasks", allTasks);
router.post("/addtask", addTask);
router.put("/modiftask", modifTask); //Terminar ruta de modif, no esta testeada aun
router.delete("/byetask", byeTask);

export default router;
