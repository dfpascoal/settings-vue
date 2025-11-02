<template>
  <div class="theme-toggle flex items-center gap-2">
    <i class="pi pi-sun text-yellow-500"></i>
    <ToggleSwitch 
      :modelValue="isDark" 
      @update:modelValue="toggleTheme"
      aria-label="Toggle theme"
    />
    <i class="pi pi-moon text-blue-400"></i>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import ToggleSwitch from 'primevue/toggleswitch'

const { isDark, toggleTheme } = useTheme()
</script>