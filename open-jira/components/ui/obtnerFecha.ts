export const obtenerFechaLocal = (fecha: Date | string|number) => {
    const fechaLista = new Date(fecha);
    return fechaLista.toLocaleDateString();
};
