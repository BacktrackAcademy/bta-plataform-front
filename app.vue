<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'es',
    class: 'dark',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
      // media: '(prefers-color-scheme: light)',
    },
    // {
    //   rel: 'icon',
    //   type: 'image/x-icon',
    //   href: '/favicon-dark.ico',
    //   media: '(prefers-color-scheme: dark)',
    // },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Backtrack Academy` : 'Cursos online de Hacking ético - Backtrack Academy'
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <Analytics/> -->
  </div>
</template>
