<template>
    <div class="red-b">
      <div class="border__blue">
        SCSS
      </div>
      <div class="background__primary">
        SCSS GLOBAL
      </div>
        テスト
        {{ testData }}
    </div>
</template>

<script>
export default {
  name: "TestComponent",
  data(){
      return{
        testData:"テストデータです"
      }
  }
}
</script>

<style scoped lang="scss">
.red-b{
  border: 1px red solid;
}

.border {
  &__blue{
    border:1px blue solid;
  }
}

.background__primary {
  background-color: $color-primary;
}

</style>