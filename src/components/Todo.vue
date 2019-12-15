<template>
  <div class="todo">
    <input class="input" v-on:keyup.enter="addTodo()" placeholder="请输入您的待办事例" v-model="content">
    <ol>
      <li class="li" v-for="(todo,index) in todos" v-bind:key="index" ><p>
        <input type="checkbox" v-on:change="change(index)">
        <span>{{todo.content}}</span>
        <button @click="remove(index)">Delete</button></p>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      todos: this.$store.state.todos
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.content);
      this.content = "";
    },
    remove(data) {
      this.$store.commit("remove", data);
    },
    change(data) {
      this.$store.commit("change", data);
      console.log(this.$store.state.todos[data]["isFinish"]);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
  width: 20em;
  /* border: 1px solid black; */
  /* text-align: center; */
}
.input {
  width: 20em;
  border-radius: 3px;
  margin-top: 10px;
}
.li {
  margin-top: 10px;
}
</style>
