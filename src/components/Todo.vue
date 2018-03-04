<template>
  <div v-on:click="$emit('switchStatus', todo.id)">
    <div>{{ todo.done }}</div>{{ todo.text }}
  </div>
</template>

<script>
  export default {
    name: 'todo',
    props: ['todo']
  }
</script>
