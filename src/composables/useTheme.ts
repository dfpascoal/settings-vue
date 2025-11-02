
import { ref, watch, computed } from 'vue'
import type { ThemeMode } from '@/types/settings'

const THEME_STORAGE_KEY = 'app-theme'

export function useTheme() {
  const currentTheme = ref<ThemeMode>(
    (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'light'
  )

  const isDark = computed(() => currentTheme.value === 'dark')

  const applyTheme = (theme: ThemeMode) => {
    const htmlElement = document.documentElement
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark-mode')
    } else {
      htmlElement.classList.remove('dark-mode')
    }
  }

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  const setTheme = (theme: ThemeMode) => {
    currentTheme.value = theme
  }

  watch(
    currentTheme,
    (newTheme) => {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
      applyTheme(newTheme)
    },
    { immediate: true }
  )

  return {
    currentTheme,
    isDark,
    toggleTheme,
    setTheme
  }
}