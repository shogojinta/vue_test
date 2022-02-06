<template>
  <div>
    <button @click="incrementAction">+</button>
    <button @click="addCount">+10</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(['incrementAction','addCountAction']),
    addCount() {
      this.addCountAction({
        value: 10
      })
    }
  }
}
</script>