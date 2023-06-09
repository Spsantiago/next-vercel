import mongoose from 'mongoose';

/**
 * 0= disconnected
 * 1= connected
 * 2= connecting
 * 3= disconnecting
 */

const mongooConection = {
    isConected: 0,
};
export const connect = async () => {
    if (mongooConection.isConected) {
        console.log('Ya estas conectado');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConection.isConected = mongoose.connections[0].readyState;

        if (mongooConection.isConected === 1) {
            console.log('Usando conexion anterior');
            return;
        }
        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongooConection.isConected = 1;
    console.log('Conectado a mongodb ', process.env.MONGO_URL);
};

export const disconnect = async () => {

    if ( process.env.NODE_ENV==='development')return;

    if (mongooConection.isConected === 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
};
