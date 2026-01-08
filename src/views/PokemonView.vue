<template>

    <PokemonImage :pokemon-id="25" />
    <PokemonOpciones :listaPokemons="pokemonArr" />

</template>

<script>

import PokemonImage from '../components/PokemonImage.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import { obtenerVectorPokemonFachada } from "../clients/PokemonClient";

export default {
    components: {
        PokemonImage,
        PokemonOpciones,
    },
    data() {
        return {
            pokemonArr: [],
        };
    },
    mounted() {
        console.log('componente montado');
        this.iniciarJuego();
    },

    methods:{
        async iniciarJuego(){
            this.pokemonArr = await obtenerVectorPokemonFachada();
        }
    }

}

</script>

<style></style>