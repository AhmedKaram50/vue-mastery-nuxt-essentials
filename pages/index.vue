<script setup>
const { data: countries } = await useFetch("/api/all");
</script>

<template>
  <div class="holder">
    <NuxtLink
      :to="`/countries/${country.name.common}`"
      v-for="country in countries"
      :key="country.name.common"
    >
      <div class="inner">
        <img :src="country.flags.svg" alt="" />
        <h3>
          {{ country.name.common }}
        </h3>
      </div>
    </NuxtLink>
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
