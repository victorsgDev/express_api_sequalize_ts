import { RequestHandler } from "express";

import { Todo } from "../model/Todo";

export const createToDo: RequestHandler = async (req, res, next) => {
    var todos = await Todo.create({ ...req.body });
    return res
        .status(200)
        .json({ message: "Todo created successfully", data: todos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const deletedTodo: Todo | null = await Todo.findByPk(id);
    await Todo.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: "Todo deleted successfully", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
    const allTodos: Todo[] = await Todo.findAll();
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    const todos: Todo | null = await Todo.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo fetched successfully", data: todos });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    await Todo.update({ ...req.body }, { where: { id } });
    const updatedTodos: Todo | null = await Todo.findByPk(id);
    return res
        .status(200)
        .json({ message: "Todo updated successfully", data: updatedTodos });
};