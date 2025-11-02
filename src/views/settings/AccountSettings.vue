<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Conta</h2>

    <p class="mb-4 text-gray-600 dark:text-gray-300">
      Gerencie as informações da sua conta, como e-mail, senha e número de telefone.
    </p>

    <p-card class="mb-4">
      <template #header>Informações da Conta</template>
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span>Email</span>
          <span class="text-gray-700 dark:text-gray-300">usuario@email.com</span>
        </div>
        <div class="flex items-center justify-between">
          <span>Telefone</span>
          <span class="text-gray-700 dark:text-gray-300">+55 11 91234-5678</span>
        </div>
      </div>
    </p-card>

    <p-card>
      <template #header>Segurança</template>
      <div class="space-y-3">
        <p-button label="Alterar senha" icon="pi pi-lock" class="w-full" />
        <p-button label="Ativar autenticação em 2 etapas" icon="pi pi-shield" class="w-full" severity="secondary" />
      </div>
    </p-card>
  </div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card';
import PButton from 'primevue/button';
</script>

<style scoped>
</style>
