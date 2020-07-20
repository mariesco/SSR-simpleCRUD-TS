"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.modifTask = exports.byeTask = exports.addTask = exports.allTasks = void 0;
const user_1 = __importDefault(require("../models/user"));
exports.allTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.find().then((task) => {
        res.send({ task });
    }, (e) => {
        res.status(400).send(e);
    });
});
exports.addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.task) {
        return res.status(400).json({ msg: "Por favor manda la tarea" });
    }
    const task = yield user_1.default.findOne({
        task: req.body.task,
    });
    console.log(task);
    if (task) {
        res.status(400).json({
            msg: "La tarea ya existe",
        });
    }
    const newTask = new user_1.default({
        task: req.body.task,
        done: false,
    });
    yield newTask.save();
    return res.status(201).json(newTask);
});
exports.byeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.name) {
        return res.status(400).json({ msg: "Por favor manda la tarea a eliminar" });
    }
    user_1.default.findOneAndRemove({
        task: req.body.name,
    })
        .then((task) => {
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send({ task });
    })
        .catch((e) => {
        res.status(400).send();
    });
});
exports.modifTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.findOneAndUpdate({ task: req.body.task }, req.body.task, {
        new: true,
    })
        .then((task) => {
        if (!task) {
            return res.status(404).send({ msg: "No se encontro dicha tarea" });
        }
        else {
            return res.status(200).send(task);
        }
    })
        .catch((e) => {
        res.status(400).send();
    });
});
