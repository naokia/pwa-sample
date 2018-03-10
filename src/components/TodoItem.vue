<template>
  <div v-on:click="$emit('switchStatus', todo.id)">
    {{ todo.text }} {{ todo.dueDateTime }}
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo']
  }
</script>
