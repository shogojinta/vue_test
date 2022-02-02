<template>
  <div>
    <p>本の詳細</p>
    <p>{{ title }}</p>
    <p>{{ content }}</p>

    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String
  },
  data() {
    return {
      bookIndex: this.$route.params.id -1,
      books: [
        {id: 1, title: 'title1', content: "11111"},
        {id: 2, title: 'title2', content: "22222"},
        {id: 3, title: 'title3', content: "33333"},
      ]
    }
  },
  created() {
    if(this.$route.params.id > this.books.length) {
      this.$router.push("/book")
    }
  }
}
</script>

<style>

</style>