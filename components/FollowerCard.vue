<script setup lang="ts">
import { ref } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'

interface Follower {
  id: number
  name: string
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
  <div class="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm">
    <Avatar class="h-12 w-12">
      <AvatarImage :src="follower.avatar" :alt="follower.name" />
      <AvatarFallback>{{ follower.name.charAt(0).toUpperCase() }}</AvatarFallback>
    </Avatar>
    <div class="flex-grow">
      <h3 class="font-semibold text-foreground">
        {{ follower.name }}
      </h3>
      <p class="text-sm text-muted-foreground">
        @{{ follower.username }}
      </p>
    </div>
    <Button
      :variant="isFollowing ? 'outline' : 'secondary'"
      :disabled="!isFollowing"
      @click="handleUnfollow"
    >
      {{ isFollowing ? 'Unfollow' : 'Unfollowed' }}
    </Button>
  </div>
</template>
