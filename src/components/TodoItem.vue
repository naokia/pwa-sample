<template>
  <div v-on:click="$emit('switchStatus', todo.id)">
    {{ todo.text }}
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo']
  }
</script>
