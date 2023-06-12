<script setup>
const route = useRoute();
const { data: country } = await useFetch(`/api/name/${route.params.id}`);
</script>

<template>
  <img :src="country[0].flags.svg" alt="" />
  <ul>
    <li>Name: {{ country[0].name.common }}</li>
    <li>Native Name: {{ country[0].name.nativeName }}</li>
    <li>Native Name: {{ country[0].name }}</li>
    <li>Capital: {{ country[0].capital }}</li>
    <li>Currency: {{ country[0].currencies }}</li>
    <li>Region: {{ country[0].region }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
