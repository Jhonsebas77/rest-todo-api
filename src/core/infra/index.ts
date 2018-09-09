import config from 'config'
import { ExpressApp } from '../app'
export class Core {
    public middleware: any
    public configuration: string
    constructor() {
        this.middleware = new ExpressApp().middleware
        this.configuration = config.get('server')
    }
    public use(...args: any[]) {
        this.middleware.use(...args)
        return this
    }
    public listen(port: any, listeningListener: () => void | undefined) {
        this.middleware.listen(port, listeningListener)
    }
    public startServer() {
        this.listen(
            (this.configuration as any).port,
            () => console.log(`Server Running at localhost:${(this.configuration as any).port}`)
        )
    }
}