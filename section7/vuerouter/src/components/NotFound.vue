<template>
  <div>
    404 page<br>
    <button @click="goToHome">Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style>

</style>