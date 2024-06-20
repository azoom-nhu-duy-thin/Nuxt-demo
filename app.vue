<script setup lang="ts">
import { theme } from 'ant-design-vue';
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <!-- <NuxtLoadingIndicator /> -->
    <a-config-provider
      :theme="{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#139aff',
          borderRadius: 20
        },
      }"
    >
     <NuxtLayout >
      <!-- <header>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
        </ul>
      </header> -->
      <!-- <Header /> -->
        <NuxtPage />
     </NuxtLayout>
    </a-config-provider>
  </div>
</template>
