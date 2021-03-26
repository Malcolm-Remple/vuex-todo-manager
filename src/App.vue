<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  }
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>