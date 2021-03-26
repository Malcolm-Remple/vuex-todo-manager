<template>
  <div>

    <!-- Title -->
    <h3>Add Todos</h3>

    <div class="add">
      <form
        @submit="onSubmit"
      >
        <input
          type="text"
          placeholder="Add a TODO"
          v-model="title"
        >
        <input 
          type="submit"
          value="submit"
          >
      </form>
    </div>

  </div>
</template>

<script>
// Import Actions from Vuex
import { mapActions } from 'vuex';

export default { 
  name: "AddTodo",

  data() {
    return {
      title: ''
    };
  },

  methods: {
    // Using Spead Operator
    ...mapActions(['addTodo']),

    // On submit event
    onSubmit(e) {
      e.preventDefault();
      // Call Todo action, pass in title
      this.addTodo(this.title);
    }
  }
};
</script>

<style scoped>
form { 
  display: flex;
  margin-bottom: 4rem;
}
input[type="text"] {
  flex: 5;
  padding: 1rem;
  border: 2px solid #3cd692;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #3cd692; 
  color: #fff;
  font-size: 20px;
  border: 1px #3cd692 solid;
  cursor: pointer;
}

h3 {
  font-family: sans-serif;
  font-size: 24px;
  color: #383838;
  text-align: center;
}
</style>