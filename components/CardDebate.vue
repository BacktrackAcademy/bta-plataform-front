<template>
  <article class="max-w-3xl rounded-xl bg-bta-dark-blue p-6 drop-shadow-xl">
    <!-- Header -->
    <header class="flex mb-3">
      <picture class="rounded-full overflow-hidden h-10 w-10 mr-2">
        <img
          src="https://api.lorem.space/image/?w=100&h=100&hash=tdr2k6fu"
          alt="pizza"
        />
      </picture>
      <div class="flex flex-col">
        <p class="font-inconsolata text-gray-muted">
          <NuxtLink
            class="text-white"
            :to="'/' + name_creator"
          >
            {{ discussion.name_creator }}
          </NuxtLink>
          realizó una pregunta
        </p>
      </div>
    </header>
    <!-- body -->
    <h2 class="text-white font-medium font-oswald text-2xl mb-2">
      <NuxtLink
        class="text-white"
        :to="'/debates/' + discussion.slug"
      >
        {{ discussion.title }}
      </NuxtLink>
    </h2>
    <p class="text-[#cacaca] font-inconsolata">
      {{ discussion.body }}
    </p>
    <!-- footer -->
    <footer class="mt-8">
      <NuxtLink
        class="text-white font-inconsolata text-sm hover:underline underline-offset-2"
        :to="'/debates/' + discussion.slug"
      >
        Ver todos los comentarios
      </NuxtLink>
    </footer>
  </article>
</template>

<script>
export default {
  name: "CardDebate",
  props: {
    discussion: {
      type: Object,
      required: true,
    },
  },
};
</script>
