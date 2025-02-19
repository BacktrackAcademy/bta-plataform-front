<script lang="ts" setup>
const config = useRuntimeConfig()
const { username } = useRoute('perfil-username').params

interface Follower {
  id: number
  name: string
  lastname: string
  username: string
  avatar: string
}

const { data: followers } = useFetch<Follower[]>(`${config.public.apiBaseUrl}/profile/${username}/followers`, {
  lazy: true,
})
</script>

<template>
  <div class="space-y-4 pb-16">
    <h2 class="text-2xl font-bold font-oswald mb-6">
      Seguidores
    </h2>
    <div v-if="followers?.length === 0">
      <p class="text-muted-foreground">
        No tienes seguidores
      </p>
    </div>
    <div v-else class="space-y-4 w-full md:w-3/4">
      <FollowerCard
        v-for="follower in followers"
        :key="follower?.id"
        :follower="follower"
      />
    </div>
  </div>
</template>
