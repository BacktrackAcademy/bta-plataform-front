<script lang="ts" setup>
import type { User } from '~/interfaces/user'

definePageMeta({
  layout: 'custom',
  auth: false,
})

const route = useRoute('perfil-username')
const { username } = route.params
const config = useRuntimeConfig()

const { data: user } = useFetch<User>(`${config.public.apiBaseUrl}/profile/${username}`)
</script>

<template>
  <section class="min-h-[calc(100vh-70px)] h-auto bg-gradient-to-b from-bta-dark-blue">
    <div class="container mx-auto px-4 py-8 max-w-7xl">
      <!-- Header con imagen de perfil y datos principales -->
      <div class="relative mb-16">
        <!-- Banner decorativo -->
        <div class="h-32 w-full bg-gradient-to-r from-bta-pink/20 to-purple-900/20 rounded-xl" />

        <!-- Contenedor de imagen y datos principales -->
        <div class="flex flex-col md:flex-row gap-6 items-start -mt-16 px-4">
          <div class="md:flex-shrink-0 relative w-fit mx-auto md:mx-0">
            <img
              :src="user?.avatar_url"
              :alt="user?.name"
              class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white object-cover shadow-xl"
            >
          </div>

          <!-- Información principal -->
          <div class="flex-1 text-white">
            <div class="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div>
                <h1 class="text-3xl font-bold font-oswald">
                  {{ user?.full_name }}
                </h1>
                <p class="text-bta-pink font-medium mt-1">
                  {{ user?.headline }}
                </p>
              </div>
            </div>

            <p class="text-gray-300 max-w-2xl font-inconsolata">
              {{ user?.aboutme }}
            </p>
          </div>
        </div>
      </div>

      <!-- Estadísticas -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <NuxtLink :to="`/perfil/${username}`" class="bg-bta-dark-blue rounded-lg p-4 backdrop-blur-sm" exact-active-class="ring-2 ring-bta-pink">
          <div class="text-bta-pink text-2xl font-bold">
            {{ user?.ranking }}
          </div>
          <div class="text-gray-400 text-sm">
            Ranking
          </div>
        </NuxtLink>

        <NuxtLink :to="`/perfil/${username}/seguidores`" class="bg-bta-dark-blue rounded-lg p-4 backdrop-blur-sm" active-class="ring-2 ring-bta-pink">
          <div class="text-bta-pink text-2xl font-bold">
            {{ user?.number_followers }}
          </div>
          <div class="text-gray-400 text-sm">
            Seguidores
          </div>
        </NuxtLink>

        <NuxtLink :to="`/perfil/${username}/siguiendo`" class="bg-bta-dark-blue rounded-lg p-4 backdrop-blur-sm" exact-active-class="ring-2 ring-bta-pink">
          <div class="text-bta-pink text-2xl font-bold">
            {{ user?.number_followeds }}
          </div>
          <div class="text-gray-400 text-sm">
            Siguiendo
          </div>
        </NuxtLink>

        <NuxtLink :to="`/perfil/${username}/cursos`" class="bg-bta-dark-blue rounded-lg p-4 backdrop-blur-sm" active-class="ring-2 ring-bta-pink">
          <div class="text-bta-pink text-2xl font-bold">
            0
          </div>
          <div class="text-gray-400 text-sm">
            Cursos
          </div>
        </NuxtLink>

        <NuxtLink :to="`/perfil/${username}/preguntas`" class="bg-bta-dark-blue rounded-lg p-4 backdrop-blur-sm" active-class="ring-2 ring-bta-pink">
          <div class="text-bta-pink text-2xl font-bold">
            0
          </div>
          <div class="text-gray-400 text-sm">
            Preguntas
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Contenedor para páginas hijas -->
    <div class="container mx-auto px-4 max-w-7xl">
      <NuxtPage />
    </div>
  </section>
</template>
