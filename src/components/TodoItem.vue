<template>
  <tr>
    <td>
      <button v-on:click="$emit('switchStatus', todo.id)">Done!</button>
    </td>
    <td>
      {{ todo.text }}
    </td>
    <td>
      {{ todo.dueDateTime }}
    </td>
  </tr>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['todo']
  }
</script>
