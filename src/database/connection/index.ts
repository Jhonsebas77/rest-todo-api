import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export class Database {
    public static connect(user: string, password: string, db: string, uri?: string) {
        try {
            mongoose.connect(uri || `mongodb://${user}:${password}@${db}`)
        } catch (error) {
            mongoose.createConnection(uri || `mongodb://${user}:${password}@${db}`)
        }
        mongoose.connection
            .once('open', () => console.log('MongoDB connection success'))
            .on('error', (e) => console.error(e))
    }
    public static debug(debug: any) {
        mongoose.set('debug', debug)
    }
}