<script setup lang="ts">
const { sayHello } = useUtils();
sayHello()
</script>
<template>
    <div>
        Home
        <Alert />
        <ProfileHeader />
        <ProfileHeaderAvatar />
    </div>
</template>
