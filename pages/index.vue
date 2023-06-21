<script setup>
</script>

<template>
  <div class="holder">
   Hi
  </div>
</template>

<style lang="scss" scoped>
.holder {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  row-gap: 60px;
  margin-top: 30px;
  .inner {
    text-align: center;
    img {
      width: 300px;
      height: 150px;
      object-fit: cover;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
