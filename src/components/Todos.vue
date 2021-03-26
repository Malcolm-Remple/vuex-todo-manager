<template>
  <div>

    <!-- Title -->
    <h3>Todos</h3>

    <!-- Todos Wrapper -->
    <div class="todos">
      
      <!-- Todo Card -->
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
      >
        {{ todo.title }}
      </div>
      <!-- Close Todo Card -->

    </div>
    <!-- Todos Wrapper -->

  </div>
</template>

<script>

// Import Getters, and Actions from Vuex
import { mapGetters, mapActions } from 'vuex';


export default { 
  name: "Todos",

  methods: {
    // Using spread operation
    ...mapActions(['fetchTodos'])
  },

  computed: mapGetters(['allTodos']),

  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
}

.todo {
  background: #17bcea;
  font-family: sans-serif;
  font-size: 24px;
  color: white;
  padding: 3rem;
  border-radius: 0.5rem;
  text-align: center;
  position: relative;
  cursor: pointer;
}

h3 {
  font-family: sans-serif;
  font-size: 24px;
  color: #383838;
  text-align: center;
}
</style>
