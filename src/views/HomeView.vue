<template>
  <div class="home">
    <div class="">
      <h3 for="">Navegación con Vue Router</h3>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
    <section>
      <h3>Comunicación entre componentes</h3>
      <ParentComponent />
    </section>
    <section>
      <h3>Manejo del estado con Vuex</h3>
      <br>
      <p>Contador: {{ count }}</p>
      <button @click="increment">Sumar</button>
      <button @click="decrement">Restar</button>
    </section>
  </div>
</template>

<script>
import ParentComponent from "@/components/ParentComponent.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "HomeView",
  components: {
    ParentComponent,
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
};





</script>

<style></style>
