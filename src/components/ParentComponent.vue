<template>
    <div class="espacio">
      <ChildComponent  @sent-text="displayText" />
      <br>
      <p>Texto recibido: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import ChildComponent from "./ChildComponent.vue";
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        receivedText: "",
      };
    },
    methods: {
      displayText(message) {
        this.receivedText = message;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .espacio{ 
    padding-top: 3%;
    padding-bottom: 3%;
  }
  </style>