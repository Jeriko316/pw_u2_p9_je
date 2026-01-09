<template>
  <div class="opciones-container">
    <ul>
      <li 
        v-for="pokemon in listaPokemons" 
        :key="pokemon.id"
        @click="pasarPadre(pokemon.id)"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        listaPokemons: {
            type: Array,
            required: true,
        },
    },
    methods: {
        pasarPadre(id) {
            this.$emit("seleccionado", id);
        },
    },
};
</script>

<style>
ul {
    list-style-type: none;
}
li {
    background: white;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    width: 250px;
    margin-top: 10px;
}
.opciones-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    margin-left: 41%;
}
</style>
