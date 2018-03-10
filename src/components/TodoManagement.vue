<template>
  <div>
    <h1>TODO List</h1>
    <input v-model="newTodoText" placeholder="input your todo">
    <DateTime format="YYYY-MM-DD h:i:s" width="100px"></DateTime>
    <button v-on:click="add">add</button>
    <ul>
      <TodoItem v-for="item in items" v-bind:todo="item" @switchStatus="switchStatus" v-if="!item.done"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import DateTime from 'vuejs-datetimepicker'

export default {
  name: 'TodoManagement',
  components: { TodoItem, DateTime },
  data () {
    return {
      newTodoText: '',
      items: [
        { id: 0, text: 'clean room', done: false },
        { id: 1, text: 'feed the cat', done: false },
        { id: 2, text: 'shaving', done: false }
      ]
    }
  },
  methods: {
    switchStatus (id) {
      if (this.items[id].done) {
        this.items[id].done = false
      } else {
        this.items[id].done = true
      }
    },
    add () {
      this.items.push({ id: this.items.length, text: this.newTodoText, done: false })
      this.newTodoText = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}
</style>
