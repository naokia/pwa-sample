<template>
  <div>
    <h1>TODO List</h1>
    <div v-if="errors.length" class="alert alert-warning">
      <ul><li v-for="error in errors">{{ error }}</li></ul>
    </div>
    <input v-model="newTodoText" placeholder="input your todo">
    <DateTime format="YYYY-MM-DD h:i:s" v-model='newDateTime' width="100px"></DateTime>
    <button v-on:click="add">add</button>
    <ul>
      <TodoItem v-for="item in items" v-bind:todo="item" @switchStatus="switchStatus" v-if="!item.done"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import DateTime from 'vuejs-datetimepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'TodoManagement',
  components: { TodoItem, DateTime },
  data () {
    return {
      errors: [],
      newTodoText: '',
      newDateTime: null,
      items: [
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
      this.errors = []
      if (!this.newTodoText) this.errors.push('Input todo')
      if (!this.newDateTime) this.errors.push('Select due datetime')
      if (this.errors.length > 0) return
      this.items.push({ id: this.items.length, text: this.newTodoText, dueDateTime: this.newDateTime, done: false })
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

.year-month-wrapper {
  background-color: #35495E
}
</style>
