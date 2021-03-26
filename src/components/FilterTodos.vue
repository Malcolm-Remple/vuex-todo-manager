<template>
  <div>

    <!-- Title -->
    <h3>Filter Todos</h3>

    <select
      @change="filterTodos($event)"
      >
      <option selected="selected">Select Filter Amount</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="200">200</option>
    </select>

  </div>
</template>

<script>
// Import Actions from Vuex
import { mapActions } from 'vuex';

export default { 
  name: "FilterTodos",

  // No need for {curly braces} or ..spread operator as mapActions is the only method
  methods: mapActions(["filterTodos"])
};
</script>

<style scoped>
h3 {
  font-family: sans-serif;
  font-size: 24px;
  color: #383838;
  text-align: center;
}

select {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  display: block;
}
</style>