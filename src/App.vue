<template>
  <div id="app">
    <h2>Todo-List</h2>
    <div id="wrapper">
      <Todo  />
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    Todo
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
body {
  background: #e6edef;
}
h2 {
  font-size: 32px;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#wrapper {
  display: flex;
  width: 30em;
  height: 30em;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid grey;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 1);
  background: white;
  border-radius: 5px;
}
ol,
li,
ul {
  list-style: none;
}
</style>
