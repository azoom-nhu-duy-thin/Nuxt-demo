<script setup lang="ts">
const { sayHello } = useUtils();
sayHello()

definePageMeta({
    middleware: "auth"
})
const { data: about } = await useAsyncData('about', () => queryContent('about').findOne())
</script>
<template>
    <div>
        Home
        <Alert />
        <ProfileHeader />
        <ProfileHeaderAvatar />
        <ContentDoc/>
        <h1>{{ about?.title }}</h1>
    </div>
</template>
