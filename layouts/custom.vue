<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// Lógica específica para el layout de listado de cursos
function logout() {
  console.warn('logout')
}
</script>

<template>
  <div class="layout min-h-screen bg-[#13161c] text-white">
    <!-- Top Area -->
    <header class="layout-top h-16 border-b border-[#1e2229] px-4">
      <div class="h-full flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger class="focus:outline-none hover:bg-[#2a2f3a]/60 transition-colors duration-200 rounded-sm p-1">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-3">
                <Avatar class="border-2 border-[#1e2229] cursor-pointer hover:border-white/50 transition-colors duration-200">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div class="hidden md:flex items-center gap-2">
                  <div>
                    <p class="text-sm font-medium text-white">
                      Usuario
                    </p>
                    <p class="text-xs text-[#c4c8ce]">
                      usuario@email.com
                    </p>
                  </div>
                  <Icon
                    name="radix-icons:chevron-down"
                    class="w-4 h-4 text-[#c4c8ce] transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </div>
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent class="w-56 bg-[#1e2229] border-[#2a2f3a] mt-2">
            <DropdownMenuItem as-child>
              <NuxtLink to="/perfil" class="flex items-center gap-2 w-full text-white">
                <Icon name="radix-icons:person" class="w-4 h-4" />
                <span>Ver mi perfil</span>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem class="flex items-center gap-2 w-full transition-colors duration-200">
              <button class="flex items-center gap-2 w-full text-red-500" @click="logout">
                <Icon name="radix-icons:exit" class="w-4 h-4" />
                <span>Cerrar sesión</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>

    <!-- Main Menu Area -->
    <div class="layout-menu bg-[#13161c]">
      <!-- Logo -->
      <div class="px-4 py-6">
        <NuxtLink to="/" class="text-white font-bold text-xl">
          Backtrack Academy
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav>
        <ul class="space-y-1">
          <li class="px-4">
            <NuxtLink
              to="/cursos"
              class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-[#c4c8ce] hover:text-white transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
            >
              <Icon name="radix-icons:home" class="size-6" />
              <span class="text-sm">Inicio</span>
            </NuxtLink>
          </li>

          <li class="px-4">
            <NuxtLink
              to="/mis-rutas"
              class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-[#c4c8ce] hover:text-white transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
            >
              <Icon name="radix-icons:card-stack" class="size-6" />
              <span class="text-sm">Mis Rutas</span>
            </NuxtLink>
          </li>

          <li class="px-4">
            <NuxtLink
              to="/mi-progreso"
              class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-[#c4c8ce] hover:text-white transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
            >
              <Icon name="radix-icons:bar-chart" class="size-6" />
              <span class="text-sm">Mi progreso</span>
            </NuxtLink>
          </li>

          <li class="px-4">
            <NuxtLink
              to="/notificaciones"
              class="flex items-center font-medium gap-5 pl-3 py-3 pr-1 text-[#c4c8ce] hover:text-white transition-colors duration-200 hover:bg-[#1e2229] group rounded-sm"
            >
              <Icon name="radix-icons:bell" class="size-6" />
              <span class="text-sm">Notificaciones</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Info Area (Cuéntanos tu opinión) -->
      <div class="layout-info mt-auto p-4">
        <div class="bg-[#1e2229] rounded-lg p-4">
          <div class="flex items-center gap-3 text-white mb-2">
            <Icon name="radix-icons:chat-bubble" class="w-5 h-5" />
            <span class="text-[15px]">Cuéntanos tu opinión</span>
          </div>
          <p class="text-[#c4c8ce] text-sm">
            Ayúdanos a mejorar la plataforma
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <main class="layout-main overflow-y-auto">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-areas:
    "top"
    "info"
    "main"
    "main-menu";
  max-height: calc(100vh + 100px);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.layout-top {
  grid-area: top;
}

.layout-menu {
  grid-area: main-menu;
  display: flex;
  flex-direction: column;
}

.layout-main {
  grid-area: main;
}

.layout-info {
  grid-area: info;
}

@media (min-width: 64rem) {
  .layout {
    max-height: 100vh;
    min-height: 100vh;
    overflow: hidden;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
      "main-menu top"
      "main-menu main"
      "info main";
  }

  .layout-menu {
    position: sticky;
    top: 0;
    height: 100vh;
  }
}
</style>
