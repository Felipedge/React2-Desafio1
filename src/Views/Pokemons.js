import React from 'react';
import "./pokemons.css"


const Pokemons = () => {
    return (
        <div className='container' >
            <h1 className='titulo' >Selecciona un Pokemón</h1>

            <select name="select"></select>


            <button className='boton'>Ver detalles</button>
        </div>
    );
}

export default Pokemons;
