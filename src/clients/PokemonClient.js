import axios from "axios";

const consumirApi = async (id) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return respuesta.data;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

const obtenerVectorPokemon = async (vectorNumerico) => {
    const resultados = await Promise.all(vectorNumerico.map(id => consumirApi(id)));
    return resultados.map(p => ({ nombre: p.name, id: p.id }));
}

export async function obtenerVectorPokemonFachada() {
    const vectorNumerico = obtenerVectorNumerico();
    return await obtenerVectorPokemon(vectorNumerico);
}

export function obtenerAleatorioFachada(min, max) {
    return obtenerAleatorio(min, max);
}
