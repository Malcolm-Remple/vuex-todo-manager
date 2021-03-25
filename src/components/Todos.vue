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
import { mapGetters, mapActions } from 'vuex';

export default { 
  name: "Todos",

  methods: {
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
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #525252;
  background: #87d9ee;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
