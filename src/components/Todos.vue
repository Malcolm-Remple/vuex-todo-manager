<template>
  <div>

    <!-- Todos Wrapper -->
    <div class="todos">
      
      <!-- Todo Card -->
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
      >
        {{ todo.title }}

        <!-- Delete Todo -->
        <div
          @click="deleteTodo(todo.id)"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#fff" class="delete-todo">
            <title>Delete Icon</title>
            <path d="M10.9 7.3V4.5h.6V1.6H8.3V.3H4.6v1.2H1.4v2.9H2v9.9h5.2c.8.8 1.8 1.3 3 1.3 2.3 0 4.2-1.9 4.2-4.2.2-2.1-1.5-3.9-3.5-4.1zm-1 0c-.6.1-1.2.3-1.6.5V4.5h1.6v2.8zm-4.3-6h1.7v.3H5.6v-.3zM2.4 2.5h8.1v1H2.4v-1zm.7 2h1.6v8.9H3.1V4.5zm2.6 8.9V4.5h1.6v4.2c-.7.8-1.1 1.8-1.1 2.9 0 .7.2 1.4.5 1.9h-1zm4.7 1.3c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.5 3.2-3.2 3.2z"/>
            <path d="M11.4 9.7l-1 1.1-1.1-1.1-.7.7 1.1 1.1-1.1 1 .7.7 1.1-1 1 1 .7-.7-1-1 1-1.1z"/>
          </svg>
        </div>
        <!-- Close Delete Todo -->

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
    // Using spread operation Fetch, Delete TODOS
    ...mapActions(['fetchTodos', 'deleteTodo'])
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
  position: relative;
}

.delete-todo {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 1.5rem;
}
</style>
