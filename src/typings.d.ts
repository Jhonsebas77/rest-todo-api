declare module "*.json" {
    const value: any;
    export default value;
}
interface IData {
    [key: string]: any
}
interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}
interface ITask {
    name: string,
    description: string,
    type: string,
    deathLine: Date
}
declare module "express-healthcheck"