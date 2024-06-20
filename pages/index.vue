<script setup lang="ts">
const { sayHello } = useUtils();
sayHello()

definePageMeta({
    middleware: "auth"
})
const { data: about } = await useAsyncData('about', () => queryContent('about').findOne())

// const counter = useState("counter", ()=> Math.round(Math.random() * 1000));

const counter = useCounter()

</script>
<template>
    <div>
        Home
        <Alert />
        <ProfileHeader />
        <ProfileHeaderAvatar />
        <ContentDoc/>
        <h1>{{ about?.title }}</h1>

        <div>
            <p>Counter: {{ counter }}</p>
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
        </div>
    </div>
</template>
