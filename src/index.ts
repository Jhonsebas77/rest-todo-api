process.env.NODE_CONFIG_DIR = `${__dirname}/env`
import { Core } from './core/infra'
export class Server extends Core {
    public static bootstrap() {
        return new Server()
    }
    constructor() {
        super()
    }
}
Server.bootstrap().startServer()