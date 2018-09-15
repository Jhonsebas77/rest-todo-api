process.env.NODE_CONFIG_DIR = `${__dirname}/env`
import { Core } from './core/infra'
import { middlewareServer, routesServer } from './middlewares'
export class Server extends Core {
    public static bootstrap() {
        return new Server()
    }
    constructor() {
        super()
        this.mountMiddleware(middlewareServer)
        this.mountRoutes(routesServer)
    }
}
Server.bootstrap().startServer()