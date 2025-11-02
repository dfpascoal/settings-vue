<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDialog } from 'primevue/usedialog'
import Button from 'primevue/button'
import SettingsSidebar from '@/components/settings/SettingsSidebar.vue'

const route = useRoute()
const router = useRouter()
const dialog = useDialog()

const isMobile = ref(false)
onMounted(() => {
  const mq = window.matchMedia('(max-width: 768px)')
  const update = () => (isMobile.value = mq.matches)
  mq.addEventListener?.('change', update)
  update()
  onUnmounted(() => mq.removeEventListener?.('change', update))
})

const isRoot = computed(() => route.name === 'settings-home')
const showSidebar = computed(() => !isMobile.value || isRoot.value)
const showContent = computed(() => !isMobile.value || !isRoot.value)

function goBack() {
  router.push({ name: 'settings-home' })
}

const THEME_LINK_ID = 'primevue-theme'
const themes = {
  light: new URL('primevue/resources/themes/aura-light-noir/theme.css', import.meta.url).href,
  dark: new URL('primevue/resources/themes/aura-dark-noir/theme.css', import.meta.url).href
}

function ensureThemeLink() {
  let link = document.getElementById(THEME_LINK_ID) as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.id = THEME_LINK_ID
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  return link
}

function setPrimeTheme(mode: 'light' | 'dark') {
  const link = ensureThemeLink()
  link.href = themes[mode]
  document.documentElement.classList.toggle('dark', mode === 'dark')
  localStorage.setItem('theme', mode)
}

const isDark = ref((localStorage.getItem('theme') || 'light') === 'dark')
onMounted(() => {
  setPrimeTheme(isDark.value ? 'dark' : 'light')
})

function toggleTheme() {
  isDark.value = !isDark.value
  setPrimeTheme(isDark.value ? 'dark' : 'light')
}

async function openLogout() {
  const { default: LogoutDialog } = await import('@/components/settings/LogoutDialog.vue')
  dialog.open(LogoutDialog, {
    props: { header: 'Confirmar saída', modal: true, closable: false, style: { width: '28rem' } },
    data: {
      onLogout: async () => {
        console.log('Usuário saiu')
        router.replace('/login')
      }
    }
  })
}
</script>

<template>
  <header class="settings-header">
    <Button v-if="isMobile && !isRoot" icon="pi pi-arrow-left" text @click="goBack" aria-label="Voltar" />
    <h1 class="settings-title">Configurações</h1>
    <div class="spacer"></div>
    <Button :icon="isDark ? 'pi pi-moon' : 'pi pi-sun'" text @click="toggleTheme" aria-label="Alternar tema" />
  </header>
  <div class="settings-layout">
    <aside v-show="showSidebar" class="settings-sidebar">
      <SettingsSidebar @logout="openLogout" />
    </aside>
    <main v-show="showContent" class="settings-content">
      <router-view />
    </main>
  </div>
</template>