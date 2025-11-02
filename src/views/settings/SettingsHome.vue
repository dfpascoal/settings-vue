<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import { useUserProfile } from '@/composables/useUserProfile'

const { profile, isLoading } = useUserProfile()

const welcomeMessage = computed(() => {
  return profile.value 
    ? `Welcome back, ${profile.value.name}!` 
    : 'Welcome to Settings'
})
</script>

<template>
  <div class="settings-home p-6">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Settings
      </h1>
      
      <p v-if="!isLoading" class="text-gray-600 dark:text-gray-400 mb-8">
        {{ welcomeMessage }}
      </p>

      <Card class="mb-6">
        <template #content>
          <div class="text-center py-12">
            <i class="pi pi-cog text-6xl text-blue-500 mb-4"></i>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Select a Setting
            </h2>
            <p class="text-gray-600 dark:text-gray-400">
              Choose an option from the sidebar to get started
            </p>
          </div>
        </template>
      </Card>

      <Card v-if="profile" class="mb-6">
        <template #header>
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Your Profile
            </h3>
          </div>
        </template>
        <template #content>
          <div class="flex items-center gap-4">
            <img 
              :src="profile.avatar" 
              :alt="profile.name"
              class="w-16 h-16 rounded-full"
            />
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">
                {{ profile.name }}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ profile.email }}
              </p>
              <p class="text-sm text-green-600 dark:text-green-400 mt-1">
                <i class="pi pi-circle-fill text-xs"></i>
                {{ profile.status }}
              </p>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>