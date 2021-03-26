import axios from 'axios';

// State
const state = {
  todos: [
    // {
    //   id: 1,
    //   title: 'TODO One'
    // },
    // {
    //   id: 2,
    //   title: 'TODO Two'
    // }
  ]
};


// Getters
const getters = {
  allTodos: (state) => state.todos
};


// Actions
const actions = {

  // Seed TODO list from JSON
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // Call a mutation
    commit('setTodos', response.data);
  },

  // Add new TODO - Pass in this.title from AddTodo.vue and commit
  async addTodo({ commit }, title) {

    // Request
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed:false
    });

    // Response and Call a mutation
    commit('newTodo', response.data);
  },

  // Delete TODO, pass in ID
  async deleteTodo({ commit }, id) {

    // Request
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    // Call a mutaion - Pass in id
    commit('deleteTodo', id)
  }
};


// Mutations
const mutations = {

  // Seed TODOs
  setTodos: (state, todos) => (state.todos = todos),

  //  Add New TODO - unshift adds new TODOS to the start of the array
  newTodo: (state, todo) =>  state.todos.unshift(todo),

  // Delete TODO - .filter to Remove todo from UI
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations
};