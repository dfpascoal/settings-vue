<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import type { DynamicDialogInstance } from 'primevue/dynamicdialogoptions'
import Button from 'primevue/button'


const dialogRef = inject<DynamicDialogInstance>('dialogRef')!
const router = useRouter()
const toast = useToast()

const isLoading = ref(false)
const error = ref<string | null>(null)

async function handleLogout() {
  if (isLoading.value) return
  isLoading.value = true
  error.value = null

  try {
    const onLogout = dialogRef.data?.onLogout as (() => Promise<void>) | undefined
    if (onLogout) {
      await onLogout()
    } else {
      await new Promise(r => setTimeout(r, 1000))
      localStorage.clear()
      sessionStorage.clear()
    }

    toast.add({ severity: 'success', summary: 'Sessão encerrada', detail: 'Você saiu da conta.', life: 2500 })

    const redirectTo = (dialogRef.data?.redirectTo as string | undefined) ?? '/login'
    dialogRef.close({ ok: true })
    await router.replace(redirectTo)
  } catch (e: any) {
    error.value = e?.message ?? 'Não foi possível sair. Tente novamente.'
    toast.add({ severity: 'error', summary: 'Erro ao sair', detail: error.value, life: 3500 })
  } finally {
    isLoading.value = false
  }
}

function handleCancel() {
  dialogRef.close({ ok: false })
}
</script>

<template>
  <div class="logout-dialog" :aria-busy="isLoading">
    <div class="logout-dialog__icon" aria-hidden="true">
      <i class="pi pi-sign-out"></i>
    </div>

    <h2 class="logout-dialog__title">Sair da conta</h2>

    <p class="logout-dialog__message">
      Tem certeza que deseja sair? Você precisará fazer login novamente para acessar sua conta.
    </p>

    <p v-if="error" class="logout-dialog__error" role="alert">{{ error }}</p>

    <div class="logout-dialog__actions">
      <Button
        type="button"
        label="Cancelar"
        @click="handleCancel"
        severity="secondary"
        outlined
        :disabled="isLoading"
        class="logout-dialog__button"
      />
      <Button
        type="button"
        label="Confirmar"
        @click="handleLogout"
        severity="danger"
        :loading="isLoading"
        class="logout-dialog__button"
        autofocus
      />
    </div>
  </div>
</template>

<style scoped>
.logout-dialog {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.logout-dialog__icon {
  width: 4rem; height: 4rem; border-radius: 50%;
  background: var(--red-100, #fff9f9);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.5rem;
}
.logout-dialog__icon i { font-size: 2rem; color: var(--red-500, #ef4444); }
.logout-dialog__title { font-size: 1.5rem; font-weight: 700; color: var(--surface-900, #0f1419); margin: 0; text-align: center; }
.logout-dialog__message { font-size: 1rem; color: var(--text-color-secondary, #536471); text-align: center; line-height: 1.5; margin: 0; max-width: 400px; }
.logout-dialog__error { color: var(--red-600, #dc2626); font-size: .95rem; text-align: center; }
.logout-dialog__actions { display: flex; gap: .75rem; width: 100%; margin-top: .5rem; }
.logout-dialog__button { flex: 1; }
@media (max-width: 480px) {
  .logout-dialog__actions { flex-direction: column-reverse; }
}
</style>
