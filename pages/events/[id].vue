<script setup lang="ts">
// const route = useRoute();
// console.log(route.params.id);
const nuxtApp = useNuxtApp();
console.log(nuxtApp);


</script>

<template>
    <div>
        Event id: {{ $route.params.id }}
    </div>
</template>