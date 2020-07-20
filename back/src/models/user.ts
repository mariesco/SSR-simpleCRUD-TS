import { model, Schema, Document } from "mongoose";

export interface ITask extends Document {
  task: string;
  done: boolean;
}

const taskSchema = new Schema({
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

export default model<ITask>("Task", taskSchema);
