<template>
    <div>
        Ahmed Is here
        {{ count }}
        <button @click="count++">Add</button>
    </div>
</template>

<script setup>
const count = ref(0)
</script>

<style lang="scss" scoped>

</style>