import { Router } from "express";

import {
    createToDo,
    deleteToDo,
    getAllToDo,
    updateTodo,
    getTodoById,
} from "../controller/Todo";

const router = Router();

router.post("/", createToDo);

router.get("/", getAllToDo);

router.get("/:id", getTodoById);

router.put("/:id", updateTodo);

router.delete("/:id", deleteToDo);

export default router;