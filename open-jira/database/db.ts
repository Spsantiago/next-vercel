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
        console.log('ya estas conectado');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConection.isConected = mongoose.connections[0].readyState;

        if (mongooConection.isConected === 1) {
            console.log('usaando conexion anterior');
            return;
        }
        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '');
    mongooConection.isConected = 1;
    console.log('conectado a mongo db ', process.env.MONGO_URL);
};

export const disconnect = async () => {
    if (mongooConection.isConected === 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
};
