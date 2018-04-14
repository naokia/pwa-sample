<template>
  <div>
    <div class="row">
      <h1>TODO List</h1>
      <div v-if="errors.length" class="alert alert-warning">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-9">
        <input v-model="newTodoText" placeholder="input your todo" class="input-sm">
      </div>
      <div class="col-sm-3">
        <DateTime format="YYYY-MM-DD h:i:s" v-model='newDateTime' class="date-picker"></DateTime>
      </div>
      <div class="col-xs-9">
        <button v-on:click="add">add</button>
      </div>
    </div>
    <div class="row">
      <table>
        <tr>
          <th>Done</th>
          <th>TODO</th>
          <th>Due DateTime</th>
        </tr>
        <TodoItem v-for="item in notDones" v-bind:todo="item" @switchStatus="switchStatus" v-if="!item.done"></TodoItem>
      </table>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
import DateTime from 'vuejs-datetimepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { mapGetters } from 'vuex'

export default {
  name: 'TodoManagement',
  components: { TodoItem, DateTime },
  data () {
    return {
      errors: [],
      newTodoText: '',
      newDateTime: null
    }
  },
  computed: {
    ...mapGetters([
      'lastIndex',
      'notDones'
    ])
  },
  methods: {
    switchStatus (id) {
      this.$store.commit('done', id)
    },
    add () {
      this.errors = []
      if (!this.newTodoText) this.errors.push('Input todo')
      if (!this.newDateTime) this.errors.push('Select due datetime')
      if (this.errors.length > 0) return
      this.$store.commit('add', { id: this.lastIndex, text: this.newTodoText, dueDateTime: this.newDateTime, done: false })
      this.newTodoText = ''
      this.newDateTime = null
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
