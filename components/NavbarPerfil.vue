<template>
  <header class="bg-bta-dark-blue">
    <div class="grid w-[calc(100%-2rem)] max-w-7xl justify-center mx-auto">
      <nav class="flex">
        <Nuxt-Link to="/editar-perfil">
        <div class="flex bg-bta-dark-blue hover:bg-bta-section  text-white font-semibold text-sm items-center justify-center py-4 px-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Datos Personales</span>
        </div>
        </Nuxt-Link>
        <Nuxt-Link to="/formacion-profesional">
        <div class="flex bg-bta-dark-blue hover:bg-bta-section  text-white font-semibold text-sm items-center justify-center py-4 px-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <span>Formación Profesional</span>
        </div>
        </Nuxt-Link>
        <Nuxt-Link to="/experiencia-laboral">
        <div class="flex bg-bta-dark-blue hover:bg-bta-section  text-white font-semibold text-sm items-center justify-center py-4 px-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Experiencia Laboral</span>
        </div>
        </Nuxt-Link>
      </nav>
    </div>
  </header>
</template>
<style>
a.nuxt-link-exact-active div{
  @apply bg-bta-section;
}
</style>