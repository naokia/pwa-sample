<template>
  <div>
    <h1>TODO List</h1>
    <ul>
      <todo v-for="item in items" v-bind:todo="item"></todo>
    </ul>
  </div>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  name: 'TodoManagement',
  components: { Todo },
  data () {
    return {
      items: [
        { text: 'clean room' },
        { text: 'feed the cat' },
        { text: 'shaving' }
      ]
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
