<template>
  <div>{{ todo.text }}</div>
</template>

<script>
  export default {
    name: 'todo',
    props: ['todo']
//    data(){
//      return {msg: 'todo'}
//    }
  }
</script>
