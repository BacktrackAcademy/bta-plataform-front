<script lang="ts" setup>
const route = useRoute('perfil-username')
const { username } = route.params
const config = useRuntimeConfig()

interface Follower {
  id: number
  name: string
  username: string
  avatar: string
}

const { data: followers } = useFetch<Follower[]>(`${config.public.apiBaseUrl}/profile/${username}/followers`)
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-2xl text-white font-bold font-oswald mb-6">
      Seguidores
    </h2>
    <div class="space-y-4">
      <FollowerCard
        v-for="follower in followers"
        :key="follower?.id"
        :follower="follower"
      />
    </div>
  </div>
</template>
