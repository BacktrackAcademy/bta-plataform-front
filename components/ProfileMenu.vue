<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const { data: session, signOut } = useAuth()

async function handleLogout() {
  await signOut()
  navigateTo('/')
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="focus:outline-none hover:bg-[#2a2f3a]/60 transition-colors duration-200 rounded-sm p-1">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
          <Avatar class="border-2 border-[#1e2229] cursor-pointer hover:border-white/50 transition-colors duration-200">
            <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div class="hidden md:flex items-center text-left gap-2">
            <div>
              <p class="text-sm font-medium text-white">
                {{ session?.user?.name }}
              </p>
              <p class="text-xs text-[#c4c8ce] w-32 truncate">
                {{ session?.user?.email }}
              </p>
            </div>
            <Icon
              name="radix-icons:chevron-down"
              class="w-4 h-4 text-[#c4c8ce] transition-transform duration-200 group-data-[state=open]:rotate-180"
            />
          </div>
        </div>
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="w-56 mt-2">
      <DropdownMenuItem as-child>
        <NuxtLink to="/perfil" class="flex items-center gap-2 w-full text-white">
          <Icon name="radix-icons:person" class="w-4 h-4" />
          <span>Ver mi perfil</span>
        </NuxtLink>
      </DropdownMenuItem>
      <DropdownMenuItem class="flex items-center gap-2 w-full transition-colors duration-200">
        <button class="flex items-center gap-2 w-full text-red-500" @click="handleLogout">
          <Icon name="radix-icons:exit" class="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
