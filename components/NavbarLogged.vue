<script setup lang="ts">
import ChevronDown from './icons/Chevron-down.vue'

const hamburgerMenuIsOpen = ref(false)
const links = [
  { name: 'Cursos', url: '/cursos' },
  { name: 'Artículos', url: '/articulos' },
  { name: 'Debates', url: '/debates' },
  // { name: "Noticias", url: "/login" },
]
const dropdownState = ref(false)

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})

function closeBurgerMenu() {
  hamburgerMenuIsOpen.value = false
}

function toggleBurgerMenu() {
  hamburgerMenuIsOpen.value = !hamburgerMenuIsOpen.value
}

function closeDropdown(e: MouseEvent) {
  const dropdownElement = document.querySelector('#dropdown-selector')
  if (dropdownElement && !dropdownElement.contains(e.target as Node)) {
    dropdownState.value = false
  }
}
</script>

<template>
  <nav class="top-0">
    <div
      :class="{ ' -translate-y-[300%]': !hamburgerMenuIsOpen }"
      class="block lg:hidden fixed w-full bg-bta-dark-blue top-20 left-0 z-0 overflow-y-scroll h-full max-h-[calc(100%-5rem)] duration-500"
    >
      <HamburgerAnimatedMenu :state="hamburgerMenuIsOpen" @toggle="toggleBurgerMenu" />
    </div>
    <div
      class="fixed top-0 left-0 flex gap-6 items-center bg-bta-dark-blue px-8 lg:px-16 w-full h-20 z-10"
    >
      <div @click.prevent="closeBurgerMenu">
        <NuxtLink to="/">
          <img class="w-32" src="~/assets/logo.svg">
        </NuxtLink>
      </div>
      <div
        class="hidden lg:grid grid-flow-col auto-cols-auto items-center justify-items-center gap-8 ml-auto uppercase text-sm"
      >
        <div id="dropdown-selector" class="relative">
          <label for="touch">
            <span class="reference-span bg-bta-dark-blue">{{ $auth.user.name }}
              <ChevronDown class="float-right right-[10%] top-6" />
            </span>
          </label>
          <input
            id="touch"
            v-model="dropdownState"
            type="checkbox"
            class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
          >
          <ul
            class="dropdown-menu absolute bg-bta-dark-blue height-0 peer-checked:h-[225px] peer-checked:border-[1px] peer-checked:border-bta-section"
          >
            <NuxtLink to="/perfil" @click="dropdownState = false">
              <li class="nav__link">
                Perfil
              </li>
            </NuxtLink>
            <li class="nav__link">
              <a href="#">Configuración</a>
            </li>
            <li class="nav__link">
              <p class="cursor-pointer" @click.prevent="$auth.logout()">
                Cerrar Sesión
              </p>
            </li>
          </ul>
        </div>
        <NuxtLink
          v-for="(link, key) in links"
          :key="key"
          :to="link.url"
          class="nav__link"
        >
          <span class="relative text-white">
            {{ link.name }}
          </span>
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="shadow-md shadow-bta-pink/50 text-white font-oswald border-bta-pink border px-3 py-1 flex-shrink-0"
        >
          Vuélvete Pro!
        </NuxtLink>
      </div>
      <HamburgerButton
        :state="hamburgerMenuIsOpen"
        @toggle="toggleBurgerMenu"
      />
    </div>
  </nav>
</template>

<style scoped>
.nav__link {
  @apply text-center text-white font-oswald relative before:block before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-gray-800 hover:before:bg-bta-pink before:scale-x-75 before:transition-all hover:before:scale-x-100;
}

.reference-span {
  @apply font-oswald;
  padding: 0 30px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-menu {
  position: absolute;
  clear: both;
  top: 40px;
  width: 100%;
  height: 0px;
  overflow: hidden;
  text-align: center;
  transition: height 0.4s ease;
}

.dropdown-menu li {
  padding: 25px 30px;
}
</style>
