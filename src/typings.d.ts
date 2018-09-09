declare module "*.json" {
    const value: any;
    export default value;
}
interface IData {
    [key: string]: any
}
declare module "express-healthcheck"