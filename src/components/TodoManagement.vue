<template>
  <div>
    <h1>TODO List</h1>
    <ul>
      <TodoItem v-for="item in items" v-bind:todo="item" @switchStatus="switchStatus" v-if="!item.done"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoManagement',
  components: { TodoItem },
  data () {
    return {
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
