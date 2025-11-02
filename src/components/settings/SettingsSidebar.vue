<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'

const emit = defineEmits<{ (e: 'logout'): void }>()
</script>

<template>
  <nav class="settings-sidebar">
    <ul class="menu">
      <li>
        <RouterLink :to="{ name: 'settings-home' }" class="menu-item" active-class="is-active">
          Início
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'settings-submenu', params: { submenu: 'privacy' } }" class="menu-item" active-class="is-active">
          Privacidade
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'account' }" class="menu-item" active-class="is-active">
          Conta
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'account-status' }" class="menu-item" active-class="is-active">
          Status da conta
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'help' }" class="menu-item" active-class="is-active">
          Ajuda
        </RouterLink>
      </li>
    </ul>
    <div class="logout">
      <Button label="Sair" icon="pi pi-sign-out" severity="danger" @click="emit('logout')" />
    </div>
  </nav>
</template>
