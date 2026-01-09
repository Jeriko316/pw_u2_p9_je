<template>
  <div>
    <PokemonImage  :pokemon-id="pokemonGanador" />

    <PokemonOpciones 
      :listaPokemons="pokemonArr" 
      @seleccionado="evaluarGanador"
    />

    <button @click="destruir(false)">Destruir</button>
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
            mostrar:false,
        };
    },
    mounted() {
        this.iniciarJuego();
    },

    /*Crear el componente */

    beforeCreate(){
        console.log("beforeCreate: apenas inicia la instancia del componente");
    },

    created(){
         console.log("create: ya se resolvieron data, computed, methods, watch");

    },

    /*Monta el componente renderiza o visualiza el componente */
    beforeMount(){
        console.log("beforeMounted: justo antes del primer render de un elmento html");
    },

    mounted(){
        console.log("componente montado: el componente ya se renderizo");
        this.iniciarJuego();
    },

    /* Actualizacion de un componente */
    beforeUpdate(){
        console.log("befeoreUpdate>: cuando cambio un data/props y vue esta por renderizar el cambio");
    },
    updated(){
        console.log("Update: ya se actualizo tras la re-renderizacion");
    },

    /*Desmontaje de un comoponente */
    beforeUnmount(){
        console.log("beforeUnmounted: justo ants de que el compontne se destruya");
    },

    unmounted(){
        console.log("unmounted: ya fue removido del DOM y destruido");
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
