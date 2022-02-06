<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
    <p>{{ book.title }}</p>
    <p>{{ book.author[0] }}</p>
    <p>{{ titleRef }}</p>
    <p>{{ authorRef[1] }}</p>
    <button @click="btnClick">click</button>
    <p>{{ totalPrice }}</p>
    <div>
     watch: <input v-model="search">
    </div>
    <div>
     watchEffect: <input v-model="searchEffect">
    </div>
  </div>
</template>

<script>
import { reactive, ref ,toRefs, 
computed, watch, watchEffect, onMounted } from 'vue'
  export default {
    setup() {
      let name = 'otani'
      const age = 27
      const nameRef = ref('nishikori')
      const book = reactive({
        title: 'title 1',
        author: ['otani 1', 'ito 1']
      })
      const booktoRefs = reactive({
        titleRef: 'title 2',
        authorRef: ['otani 2', 'ito 2']
      })
      const item = reactive({
        price: 100,
        number: 1
      })

      const totalPrice = computed(() => {
        return item.price * item.number
      })

      const btnClick = (e) => {
        console.log(book.title);
        console.log(e);
      }
      const search = ref('')
      watch(search, (newValue, prevValue) => {
        console.log(`watch:${search.value}`);
        console.log(`new:${newValue}`);
        console.log(`prev:${prevValue}`);
      })
      const searchEffect = ref('')
      watchEffect(() => {
        console.log(`watchEffect: ${searchEffect.value}`);
      })
      onMounted(() => {
        console.log('onMounted');
      })

      console.log('setup');
      console.log(this);
      console.log(nameRef.value);

      return {
        name: name,
        age: age,
        nameRef,
        book,
        ...toRefs(booktoRefs),
        btnClick,
        item,
        totalPrice,
        search,
        searchEffect
      }
    },
    data() {
      return {
        number: 1,
        sports: 'soccer'
      }
    },
    created() {
      console.log('created');
      console.log(this);
    },
    mounted() {
      console.log('mounted');
    }
  }
</script>