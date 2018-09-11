import { Document, Model, model, Schema } from 'mongoose'
export interface IUserModel extends IUser, Document { }
export const UserSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})
export const User: Model<IUserModel> = model<IUserModel>('User', UserSchema)