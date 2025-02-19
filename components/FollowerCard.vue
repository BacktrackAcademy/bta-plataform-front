<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'

interface Follower {
  id: number
  name: string
  lastname: string
  username: string
  avatar: string
}

const props = defineProps<{
  follower: Follower
}>()

const emit = defineEmits<{
  (e: 'unfollow', id: number): void
}>()

const isFollowing = ref(true)

function handleUnfollow() {
  emit('unfollow', props.follower.id)
}
</script>

<template>
  <div class="flex items-center gap-3 p-3 md:p-4 bg-card rounded-lg shadow-sm min-w-0">
    <Avatar size="md">
      <AvatarImage :src="follower.avatar" :alt="follower.name" />
      <AvatarFallback>{{ follower.name.charAt(0).toUpperCase() }}</AvatarFallback>
    </Avatar>
    <div class="flex-1 min-w-0">
      <h3 class="font-semibold text-foreground truncate">
        {{ follower.name }} {{ follower.lastname }}
      </h3>
      <p class="text-sm text-muted-foreground truncate">
        <NuxtLink :to="`/perfil/${follower.username}`" class="hover:underline hover:text-bta-pink transition-all duration-300">
          @{{ follower.username }}
        </NuxtLink>
      </p>
    </div>
    <Button
      :variant="isFollowing ? 'outline' : 'secondary'"
      :disabled="!isFollowing"
      size="sm"
      @click="handleUnfollow"
    >
      {{ isFollowing ? 'Dejar de seguir' : 'Seguir' }}
    </Button>
  </div>
</template>
