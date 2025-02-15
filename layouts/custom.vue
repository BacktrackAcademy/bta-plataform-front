<script setup lang="ts">

</script>

<template>
  <div class="layout student-layout text-white bg-bta-dark-blue">
    <!-- Main Menu Area -->
    <nav class="layout-menu">
      <!-- Logo -->
      <div class="hidden px-4 py-6 lg:block w-full">
        <NuxtLink to="/" class="text-white font-bold text-xl">
          <img class="pl-4 w-32" src="~/assets/logo.svg">
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <ul class="space-y-1 m-0 flex flex-nowrap justify-center items-center lg:flex-col lg:items-start">
        <li class="px-4 lg:w-full">
          <NuxtLink
            to="/dashboard"
            class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-white font-inconsolata transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
          >
            <Icon name="radix-icons:home" class="size-6" />
            <span class="text-sm hidden md:inline-block">Inicio</span>
          </NuxtLink>
        </li>

        <li class="px-4 lg:w-full">
          <NuxtLink
            to="/cursos"
            class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-white font-inconsolata transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
          >
            <Icon name="radix-icons:card-stack" class="size-6" />
            <span class="text-sm hidden md:inline-block">Mis cursos</span>
          </NuxtLink>
        </li>

        <li class="px-4 lg:w-full">
          <NuxtLink
            to="/mi-progreso"
            class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-white font-inconsolata transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
          >
            <Icon name="radix-icons:bar-chart" class="size-6" />
            <span class="text-sm hidden md:inline-block">Mi progreso</span>
          </NuxtLink>
        </li>

        <li class="px-4 lg:w-full">
          <NuxtLink
            to="/dashboard"
            class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-white font-inconsolata transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
          >
            <Icon name="radix-icons:bell" class="size-6" />
            <span class="text-sm hidden md:inline-block">Artículos</span>
          </NuxtLink>
        </li>
        <li class="px-4 lg:w-full">
          <NuxtLink
            to="/debates"
            class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-white font-inconsolata transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
          >
            <Icon name="radix-icons:chat-bubble" class="size-6" />
            <span class="text-sm hidden md:inline-block">Debates</span>
          </NuxtLink>
        </li>
      </ul>
      <!-- Info Area (Cuéntanos tu opinión) -->
      <div class="absolute bottom-0">
        <section class="bg-[#0E1224] rounded-lg h-fit layout-info m-6 hidden lg:block">
          <div class="p-4">
            <div class="flex items-center gap-3 text-white mb-2">
              <Icon name="radix-icons:chat-bubble" class="w-5 h-5" />
              <span class="text-[15px]">Cuéntanos tu opinión</span>
            </div>
            <p class="text-[#c4c8ce] text-sm">
              Ayúdanos a mejorar la plataforma
            </p>
          </div>
        </section>
      </div>
    </nav>
    <!-- Top Area -->
    <header class="layout-top h-16 px-4 py-2">
      <div class="flex items-center justify-between gap-2">
        <div>
          <!-- <input type="text" placeholder="Buscar curso" class="w-full bg-[#1e2229] border border-[#2a2f3a] rounded-sm px-3 py-1 text-white text-sm"> -->
        </div>
        <div class="h-full flex items-center justify-end">
          <ProfileMenu />
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="layout-main lg:overflow-x-hidden lg:overflow-y-auto bg-bta-blue">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.student-layout {
  display: block;
}

.layout {
  max-height: calc(100vh + 100px);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.layout-top {
  grid-area: top;
}

.layout-menu {
  grid-area: main-menu;
  display: block;
  background-color: #070916;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 4;
}

.layout-main {
  grid-area: main;
}

.layout-info {
  grid-area: info;
}

@media (min-width: 64rem) {
  .student-layout {
    display: grid;
  }

  .layout {
    max-height: 100vh;
    min-height: 100vh;
    overflow: auto;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
      "main-menu top"
      "main-menu main"
      "info main";
  }

  .layout-menu {
    position: relative;
    top: 0;
    height: 100vh;
  }

}
</style>
