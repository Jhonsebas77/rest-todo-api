import { Document, Model, model, Schema } from 'mongoose'
export interface ITaskModel extends ITask, Document { }
export const TaskSchema: Schema = new Schema({
    name: String,
    description: String,
    type: String,
    deathLine: Date
})
export const User: Model<ITaskModel> = model<ITaskModel>('Task', TaskSchema)