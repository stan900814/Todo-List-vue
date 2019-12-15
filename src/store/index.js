import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
    id: 0
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({
        id: state.id,
        content: payload,
        isFinish: false
      })
      state.id += 1
    },
    remove(state, payload) {
      state.todos.splice(payload, 1)
      console.log(state.todos, state.id)
    },
    change(state, payload) {
      console.log(state.todos[payload]['isFinish'])
      state.todos[payload]['isFinish'] = !state.todos[payload]['isFinish']
      console.log(state.todos[payload]['isFinish'])
    }
  },
})
export default store