"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    task: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
});
exports.default = mongoose_1.model("Task", taskSchema);
