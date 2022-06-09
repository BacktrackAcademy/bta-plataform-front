<template>
  <div>
    <div class="bg-bta-section">
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

        <main class="max-w-7xl mx-auto sm:px-6">
          <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-border">
            <h1 class="text-4xl font-semibold tracking-tight text-white font-oswald">Catálogo de cursos</h1>



            <div class="flex items-center">
              <div class="relative inline-block text-left">
                <div>
                  <button type="button"
                    class="group inline-flex justify-center text-sm font-medium text-white hover:text-gray-900"
                    id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Sort
                    <!-- Heroicon name: solid/chevron-down -->
                    <svg class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                -->
                <!--<div class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1" role="none">
                    
                      Active: "bg-gray-100", Not Active: ""

                      Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                    
                    <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0"> Most Popular </a>

                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"> Best Rating </a>

                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2"> Newest </a>

                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3"> Price: Low to High </a>

                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4"> Price: High to Low </a>
                  </div>
                </div>
                -->
              </div>

              <button type="button" class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                <span class="sr-only">View grid</span>
                <!-- Heroicon name: solid/view-grid -->
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button type="button" class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
                <span class="sr-only">Filters</span>
                <!-- Heroicon name: solid/filter -->
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" class="pt-6 pb-24">
            <h2 id="products-heading" class="sr-only">Products</h2>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <!-- Filters -->
              <form class="hidden lg:block">
                <h3 class="sr-only">Categories</h3>
                <ul role="list"
                  class="text-sm font-medium font-inconsolata text-white space-y-4 pb-6 border-b border-gray-border">
                  <li>
                    <a href="#"> Todos </a>
                  </li>

                  <li>
                    <a href="#"> Más Popular </a>
                  </li>

                  <li>
                    <a href="#"> Últimos publicados </a>
                  </li>

                  <li>
                    <a href="#"> Próximos cursos </a>
                  </li>
                </ul>

                <div class="border-b border-gray-border relative">
                  <input id="but" type="checkbox"
                    class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
                  <div class="w-full h-12 flex items-center">
                    <h3 class="-my-3 flow-root font-medium text-white font-oswald">
                      Dificultad
                    </h3>
                  </div>
                  <div
                    class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  <div class="py-6 peer-checked:hidden transition-transform duration-700">
                    <div class="peer-checked:bg-red-500 space-y-4">

                      <div v-for="(level, i) in levels" :key="i">
                        <div class="flex items-center gap-2">
                          <input id="filter-size-0" name="size[]" :value="level.id" type="checkbox" v-model="level_ids"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-size-0"
                            class="ml-3 text-sm text-gray-muted font-inconsolata hover:text-white">{{ level.name
                            }}</label>
                          <label class="text-gray-muted font-inconsolata hover:text-white">{{ level.number_courses
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-b border-gray-border relative">
                  <input id="but" type="checkbox"
                    class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer">
                  <div class="w-full h-12 flex items-center">
                    <h3 class="-my-3 flow-root font-medium text-white font-oswald">
                      Categorías
                    </h3>
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
                        <div class="flex items-center gap-2">
                          <input id="filter-size-0" name="size[]" :value="category.id" type="checkbox" v-model="category_ids"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-size-0"
                            class="ml-3 text-sm text-gray-muted font-inconsolata hover:text-white">{{ category.name
                            }}</label>
                          <label class="text-gray-muted font-inconsolata hover:text-white">{{ category.number_courses
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="border-b border-gray-200 relative">
                  <input id="but" type="checkbox"
                    class="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                  <div class="w-full h-12 flex items-center">
                    <h3 class="-my-3 flow-root font-medium text-white font-oswald">
                      Docentes
                    </h3>
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
                          <input id="filter-size-0" name="size[]" :value="teacher.id" type="checkbox" v-model="user_ids"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                          <label for="filter-size-0"
                            class="ml-3 text-sm text-gray-muted font-inconsolata hover:text-white"> {{ teacher.name }}
                            {{ teacher.lastname }}  </label>
                          <label class="text-gray-muted font-inconsolata hover:text-white"> {{ teacher.number_courses
                          }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <!-- Product grid -->
              <div class="lg:col-span-3">
                <!-- Replace with your content -->
                <div class="h-96 lg:h-full">
                  <div class="grid grid-cols-3 gap-8">
                    <div v-for="(course, i) in courses" :key="i">
                      <div class="max-w-xs mx-auto">
                        <div class="flex flex-col h-full bg-bta-dark-blue shadow-lg rounded-lg overflow-hidden">
                          <!-- Image -->
                          <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                            <figure class="relative h-0 pb-[56.25%] overflow-hidden">
                              <img
                                class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                                :src="course.image_thumb" width="320" height="180" alt="Course">
                            </figure>
                          </a>
                          <!-- Card Content -->
                          <div class="flex-grow flex flex-col p-5">
                            <!-- Card body -->
                            <div class="flex-grow">
                              <!-- Header -->
                              <header class="mb-3">
                                <a class="block focus:outline-none focus-visible:ring-2" href="#0">
                                  <h3 class="text-[22px] font-extrabold leading-snug font-oswald text-white">{{
                                      course.titulo
                                  }}</h3>
                                </a>
                              </header>
                              <!-- Content -->
                              <div class="mb-8 text-gray-muted font-inconsolata">
                                <p>{{ course.shortdes }}</p>
                              </div>
                            </div>
                            <!-- Card footer -->
                            <div class="flex justify-end space-x-2">
                              <a class="font-inconsolata text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-muted hover:underline focus:outline-none focus-visible:ring-2"
                                href="#0">{{ course.total_length }}</a>
                              <NuxtLink
                                class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                                :to="'/curso/' + course.slug">
                                Ver
                              </NuxtLink>
                              <a class="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                                href="#0">Comprar</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
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
    }
  },
  mounted() {
    this.getCourses();
    this.getTeachers();
    this.getLevels();
    this.getCategories();
  },
  watch:{
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

  }
}
</script>
