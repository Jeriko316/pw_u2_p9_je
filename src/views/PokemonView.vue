<template>
  <div>
    <PokemonImage :pokemon-id="pokemonGanador" />

    <PokemonOpciones 
      :listaPokemons="pokemonArr" 
      @seleccionado="evaluarGanador"
    />

    <!-- Mostrar resultado directamente en la página -->
    <p v-if="resultado" class="resultado">{{ resultado }}</p>
  </div>
</template>

<script>
import PokemonImage from '../components/PokemonImage.vue';
import PokemonOpciones from '../components/PokemonOpciones.vue';
import { obtenerAleatorioFachada, obtenerVectorPokemonFachada } from "../clients/PokemonClient";

export default {
    components: {
        PokemonImage,
        PokemonOpciones,
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: null,
            resultado: "", // ← aquí guardaremos el mensaje
        };
    },
    mounted() {
        this.iniciarJuego();
    },
    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFachada();
            const idAleatorio = obtenerAleatorioFachada(0, this.pokemonArr.length - 1);
            this.pokemonGanador = this.pokemonArr[idAleatorio].id;
            this.resultado = ""; // limpiar mensaje al iniciar
        },
        evaluarGanador(idSeleccionado) {
            if (idSeleccionado === this.pokemonGanador) {
                this.resultado = "¡Ganaste!";
            } else {
                this.resultado = "Perdiste...";
            }
        },
    },
};
</script>

<style>
.resultado {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    color: #1d7a1d; /* verde si quieres */
}
</style>
