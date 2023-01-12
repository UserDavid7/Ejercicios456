import react from 'react';
import { useState, useEffect } from 'react';

const Clock = () => {

    const [estado, setEstado] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: "David Emmanuel",
        apellidos: "Garcia Mejia"
    });

    const update = () => setEstado(prevState => {
        let edad = prevState.edad + 1;
        return {
            ...prevState,
            fecha: new Date(),
            edad
        }
    });
    useEffect(() => {
        console.log('se monta el componente')
        const timer = setInterval(() => update(), 1000);

        console.log('se retira el componente');
        return () => clearInterval(timer);
    }, [])

    return (
        <>
            <div>
                <h2> Hora Actual:{estado.fecha.toLocaleTimeString()}</h2>
                <h3> {estado.nombre} {estado.apellidos} </h3>
                <h1> {estado.edad} </h1>
            </div>
        </>
    )
}

export default Clock;