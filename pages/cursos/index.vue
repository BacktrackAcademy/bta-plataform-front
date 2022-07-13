<template>
  <div>
    <main class="bg-bta-section mx-auto sm-px-6">
      <div class="flex bg-bta-dark-blue">
        <!-- Filters -->
        <form class="hidden lg:block w-3/12 px-[1%] xl:px-[3%]">
          <!-- <h3 class="sr-only">Tipos</h3>
          <ul role="list"
            class="text-sm font-medium font-inconsolata text-white space-y-4 pb-6 border-b border-gray-border">
            <li>
              <a href="#"> Recomendado</a>
            </li>

            <li>
              <a href="#"> Todos </a>
            </li>

            <li>
              <a href="#"> Gratis </a>
            </li>

            <li>
              <a href="#"> Premiun </a>
            </li>
          </ul> -->

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">

            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Categorías
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>

            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">
                <div v-for="(category, i) in categories" :key="i">
                  <div class="flex items-center gap-2 ">
                    <label :for="category.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="category.name" name="size[]" :value="category.id" type="checkbox"
                        v-model="category_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">

                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ category.name}}</h3>

                      <label class="text-gray-muted hover:text-white">
                        {{ category.number_courses }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Dificultad
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">

                <div v-for="(level, i) in levels" :key="i">
                  <div class="flex items-center gap-2">
                    <label :for="level.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="level.name" name="size[]" :value="level.id" type="checkbox" v-model="level_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">
                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ level.name}}</h3>

                      <label class="text-gray-muted font-inconsolata hover:text-white">{{ level.number_courses
                        }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative">
            <input id="but" type="checkbox"
              class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
            <div class="w-full my-6 gap-2 flex">
              <h3 class="font-medium text-3xl text-white font-oswald pl-5">
                Docentes
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="3.512" viewBox="0 0 50 3.512" class="animate-fast-pulse self-end">
                <path id="Trazado_20983" data-name="Trazado 20983" d="M0,0H50V3.512H0Z" fill="#ec1075" />
              </svg>
            </div>
            <div
              class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <!-- Filter section, show/hide based on section state. -->
            <div class="py-6 peer-checked:hidden transition-transform duration-700">
              <div class="space-y-4">

                <div v-for="(teacher, i) in teachers" :key="i">
                  <div class="flex items-center">
                    <label :for="teacher.name"
                      class="label-container text-sm items-center gap-2 font-sans text-white relative select-none cursor-pointer">

                      <input :id="teacher.name" name="size[]" :value="teacher.id" type="checkbox" v-model="user_ids"
                        class="absolute opacity-0 cursor-pointer h-0 w-0 border-gray-300 rounded focus:ring-indigo-500">
                      <div class="cursor-pointer h-2 w-2 bg-inherit"></div>
                      <h3>{{ teacher.name }} {{ teacher.lastname }} </h3>
                      <label class="text-gray-muted font-inconsolata hover:text-white"> {{ teacher.number_courses
                        }}</label>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div class="lg:col-span-3 bg-bta-blue w-9/12">

          <div class="h-96 lg:h-full lg:w-11/12 mx-auto">
            <div class="flex items-center justify-between py-10">
              <h1 class="text-white text-3xl xl:text-5xl font-oswald font-semibold">
                Cursos de hacking ético</h1>
                <div class="flex flex-row-reverse gap-1 bg-gray-border w-1/6 items-center px-3 py-2 rounded-full overflow-hidden"
                  action="/search">
                  <input class="bg-transparent text-white w-60 outline-none text-sm focus:translate-x-10 searcher__input"
                    type="text" placeholder="¿Qué te gustaría aprender?" v-model="query"/>
                  <svg class="text-white searcher__icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="10" cy="10" r="7"></circle>
                    <line x1="21" y1="21" x2="15" y2="15"></line>
                  </svg>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-8">
              <div v-for="(course, i) in courses" :key="i">
                <div
                  class="max-w-[300px] mx-auto h-full shadow-md shadow-bta-dark-blue transition-shadow duration-500 ">
                  <NuxtLink :to="'/curso/' + course.slug"
                    class=" focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-bta-pink">
                    <div class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden">
                      <!-- Image -->
                      <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                          :src="course.image_thumb" width="320" height="180" alt="Course" />
                      </figure>
                      <!-- Card Content -->
                      <div class="flex-grow flex flex-col p-5">
                        <!-- Card body -->
                        <div class="flex-grow">
                          <!-- Header -->
                          <header class="mb-3 site-heading">
                            <div class="glitch-parent">
                              <h3 class="glitch text-[22px] font-extrabold leading-snug font-oswald text-white">
                                <span aria-hidden="true">{{ course.titulo}}</span>
                                {{ course.titulo}}
                                <span aria-hidden="true">{{ course.titulo}}</span>
                              </h3>
                            </div>
                          </header>
                          <!-- Content -->
                          <div class="mb-8 text-gray-muted font-inconsolata">
                            <p>{{ course.shortdes }}</p>
                          </div>
                        </div>
                        <!-- Card footer -->
                        <div class="flex justify-end space-x-2">
                          <p
                            class="font-inconsolata text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-muted hover:underline focus:outline-none focus-visible:ring-2">
                            {{ course.total_length }}</p>
                          <a v-if="course.price == 0 || course.price == null"
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white">
                            Gratis </a>
                          <div v-else
                            class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-bta-pink/95 focus:outline-none focus-visible:ring-2 hover:bg-bta-pink text-white">
                            $ {{ course.price }}</div>
                        </div>
                      </div>
                    </div>

                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <!--
          Mobile filter dialog

          Off-canvas filters for mobile, show/hide based on off-canvas filters state.
        -->
        <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <!--
            Off-canvas menu backdrop, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>

          <div class="fixed inset-0 flex z-40">
            <!--
              Off-canvas menu, show/hide based on off-canvas menu state.

              Entering: "transition ease-in-out duration-300 transform"
                From: "translate-x-full"
                To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "translate-x-full"
            -->
            <div
              class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
              <div class="px-4 flex items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button type="button"
                  class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4 border-t border-gray-200">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="font-medium text-gray-900 px-2 py-3">
                  <li>
                    <a href="#" class="block px-2 py-3"> Totes </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3"> Backpacks </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3"> Travel Bags </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3"> Hip Bags </a>
                  </li>

                  <li>
                    <a href="#" class="block px-2 py-3"> Laptop Sleeves </a>
                  </li>
                </ul>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <!-- Expand/collapse section button -->
                    <button type="button"
                      class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span class="font-medium text-gray-900"> Color </span>
                      <span class="ml-6 flex items-center">
                        <!--
                          Expand icon, show/hide based on section open state.

                          Heroicon name: solid/plus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd" />
                        </svg>
                        <!--
                          Collapse icon, show/hide based on section open state.

                          Heroicon name: solid/minus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <!-- Filter section, show/hide based on section state. -->
                  <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500"> White </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500"> Beige </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500"> Blue </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500"> Brown </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500"> Green </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500"> Purple </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <!-- Expand/collapse section button -->
                    <button type="button"
                      class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-1" aria-expanded="false">
                      <span class="font-medium text-gray-900"> Categoría </span>
                      <span class="ml-6 flex items-center">
                        <!--
                          Expand icon, show/hide based on section open state.

                          Heroicon name: solid/plus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd" />
                        </svg>
                        <!--
                          Collapse icon, show/hide based on section open state.

                          Heroicon name: solid/minus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <!-- Filter section, show/hide based on section state. -->
                  <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500"> New Arrivals
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500"> Sale </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500"> Travel </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500"> Organization
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500"> Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    <!-- Expand/collapse section button -->
                    <button type="button"
                      class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                      aria-controls="filter-section-mobile-2" aria-expanded="false">
                      <span class="font-medium text-gray-900"> Size </span>
                      <span class="ml-6 flex items-center">
                        <!--
                          Expand icon, show/hide based on section open state.

                          Heroicon name: solid/plus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clip-rule="evenodd" />
                        </svg>
                        <!--
                          Collapse icon, show/hide based on section open state.

                          Heroicon name: solid/minus-sm
                        -->
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
                          <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <!-- Filter section, show/hide based on section state. -->
                  <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500"> 2L </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500"> 6L </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500"> 12L </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-3" class="ml-3 min-w-0 flex-1 text-gray-500"> 18L </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox"
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-4" class="ml-3 min-w-0 flex-1 text-gray-500"> 20L </label>
                      </div>

                      <div class="flex items-center">
                        <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked
                          class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                        <label for="filter-mobile-size-5" class="ml-3 min-w-0 flex-1 text-gray-500"> 40L </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      courses: [],
      teachers: [],
      levels: [],
      categories: [],
      user_ids: [],
      level_ids: [],
      category_ids: [],
      query: ''
    }
  },
  mounted() {
    this.getCourses();
    this.getTeachers();
    this.getLevels();
    this.getCategories();
  },
  watch:{
    query(){
      this.getCourses()
    },
    level_ids(){
      this.getCourses()
    },
    category_ids(){
      this.getCourses()
    },
    user_ids(){
      this.getCourses()
    }
  },
  methods: {
    getCourses() {
      this.$axios.get("api/v1/courses", { 
        params: {
          user_ids: this.user_ids,
          level_ids: this.level_ids,
          category_ids: this.category_ids,
          query: this.query
        }
      }).then((response) => {
        this.courses = response.data;
      })
        .catch((error) => console.log(error));
    },
    getTeachers() {
      this.$axios.get("api/v1/teacher").then((response) => {
        this.teachers = response.data;
      })
        .catch((error) => console.log(error));
    },
    getLevels() {
      this.$axios.get("api/v1/level").then((response) => {
        this.levels = response.data;
      })
        .catch((error) => console.log(error));
    },
    getCategories() {
      this.$axios.get("api/v1/category").then((response) => {
        this.categories = response.data;
      })
        .catch((error) => console.log(error));
    },

  },

  // SEO Meta Tags
  head: {
    title: "Cursos de Hacking Ético - Backtrack Academy",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Únete gratis y comienza a aprender seguridad informatica desde cero con los mejores hackers.'
      },
      {
        hid: 'keywords',
        name: 'description',
        content: 'Gratis, Hacking, Wireshark, Hacker, Python, Android, Informatica, Seguridad, Academy, Online, Cursos, JavaScript'
      }
    ]
  },
}
</script>
<style scoped>
 .searcher__input{
    transition: .5s;
  }
  .searcher__input:focus{
    transform: translateX(-25px);
  }
  .searcher__icon{
    transition: .5s;
  }
  .searcher__input:focus ~ .searcher__icon{
    transform: translateX(-50px);
    opacity: 0;
  }
.glitch:hover{
  position: relative;
  text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
    0.025em 0.04em 0 #e7e413fd;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #0846ff, -0.03em -0.04em 0 #f90c0c,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #0846ff, 0.025em 0.035em 0 #f90c0c,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #0846ff, 0.03em 0 0 #f90c0c,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #0846ff, -0.025em -0.04em 0 #f90c0c,
      -0.04em -0.025em 0 #fffc00;
  }
}

.label-container{
  display: flex;
}
.label-container:hover input ~ div {
  @apply bg-gray-muted;
}
.label-container input:checked ~ div {
  @apply bg-bta-pink shadow-2xl shadow-bta-pink;
}

</style>
