<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'

const router = useRouter()

const accountData = ref({
  name: 'João Silva',
  username: 'joaosilva',
  email: 'joao.silva@example.com',
  phone: '+55 11 98765-4321',
  birthDate: new Date('1995-06-15'),
  gender: 'Masculino',
  language: 'Português (Brasil)',
  timezone: 'America/Sao_Paulo'
})

const genderOptions = ['Masculino', 'Feminino', 'Outro', 'Prefiro não dizer']
const languageOptions = ['Português (Brasil)', 'English', 'Español']
const timezoneOptions = [
  'America/Sao_Paulo',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo'
]

const goBack = () => {
  router.push('/settings')
}

const saveChanges = () => {
  console.log('Salvando alterações:', accountData.value)
  alert('Alterações salvas com sucesso!')
}

const cancelChanges = () => {
  goBack()
}
</script>

<template>
  <div class="account-settings">

    <div class="account-settings__header">
      <Button
        icon="pi pi-arrow-left"
        @click="goBack"
        text
        rounded
        class="md:hidden"
        aria-label="Voltar"
      />
      <h1 class="account-settings__title">Conta</h1>
    </div>

    <div class="account-settings__content">
      
      <Card class="settings-card">
        <template #header>
          <div class="card-header">
            <i class="pi pi-user card-icon"></i>
            <h3 class="card-title">Informações Pessoais</h3>
          </div>
        </template>
        <template #content>
          <div class="form-grid">
            <div class="form-field">
              <label for="name" class="field-label">Nome completo</label>
              <InputText 
                id="name"
                v-model="accountData.name"
                class="w-full"
              />
            </div>

            <div class="form-field">
              <label for="username" class="field-label">Nome de usuário</label>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">@</span>
                <InputText 
                  id="username"
                  v-model="accountData.username"
                />
              </div>
            </div>

            <div class="form-field">
              <label for="email" class="field-label">E-mail</label>
              <InputText 
                id="email"
                v-model="accountData.email"
                type="email"
                class="w-full"
              />
            </div>

            <div class="form-field">
              <label for="phone" class="field-label">Telefone</label>
              <InputText 
                id="phone"
                v-model="accountData.phone"
                class="w-full"
              />
            </div>

            <div class="form-field">
              <label for="birthDate" class="field-label">Data de nascimento</label>
              <Calendar 
                id="birthDate"
                v-model="accountData.birthDate"
                dateFormat="dd/mm/yy"
                class="w-full"
              />
            </div>

            <div class="form-field">
              <label for="gender" class="field-label">Gênero</label>
              <Dropdown
                id="gender"
                v-model="accountData.gender"
                :options="genderOptions"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card class="settings-card">
        <template #header>
          <div class="card-header">
            <i class="pi pi-cog card-icon"></i>
            <h3 class="card-title">Preferências</h3>
          </div>
        </template>
        <template #content>
          <div class="form-grid">
            <div class="form-field">
              <label for="language" class="field-label">Idioma</label>
              <Dropdown
                id="language"
                v-model="accountData.language"
                :options="languageOptions"
                class="w-full"
              />
            </div>

            <div class="form-field">
              <label for="timezone" class="field-label">Fuso horário</label>
              <Dropdown
                id="timezone"
                v-model="accountData.timezone"
                :options="timezoneOptions"
                class="w-full"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card class="settings-card">
        <template #header>
          <div class="card-header">
            <i class="pi pi-shield card-icon"></i>
            <h3 class="card-title">Segurança</h3>
          </div>
        </template>
        <template #content>
          <div class="security-actions">
            <Button
              label="Alterar senha"
              icon="pi pi-lock"
              outlined
              class="security-button"
            />
            <Button
              label="Autenticação de dois fatores"
              icon="pi pi-mobile"
              outlined
              class="security-button"
            />
            <Button
              label="Dispositivos conectados"
              icon="pi pi-desktop"
              outlined
              class="security-button"
            />
            <Button
              label="Sessões ativas"
              icon="pi pi-clock"
              outlined
              class="security-button"
            />
          </div>
        </template>
      </Card>

      <Card class="settings-card danger-card">
        <template #header>
          <div class="card-header">
            <i class="pi pi-exclamation-triangle card-icon"></i>
            <h3 class="card-title">Zona de Perigo</h3>
          </div>
        </template>
        <template #content>
          <div class="danger-zone">
            <p class="danger-description">
              Ações irreversíveis que afetam permanentemente sua conta.
            </p>
            <div class="danger-actions">
              <Button
                label="Desativar conta temporariamente"
                icon="pi pi-pause"
                severity="warning"
                outlined
                class="danger-button"
              />
              <Button
                label="Excluir conta permanentemente"
                icon="pi pi-trash"
                severity="danger"
                outlined
                class="danger-button"
              />
            </div>
          </div>
        </template>
      </Card>

      <div class="action-buttons">
        <Button
          label="Cancelar"
          icon="pi pi-times"
          severity="secondary"
          outlined
          @click="cancelChanges"
        />
        <Button
          label="Salvar alterações"
          icon="pi pi-check"
          @click="saveChanges"
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
.account-settings {
  min-height: 100vh;
  background: #f8f9fa;
}

.dark .account-settings {
  background: #0f1419;
}

.account-settings__header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.dark .account-settings__header {
  background: #16181c;
  border-bottom-color: #2f3336;
}

@media (max-width: 768px) {
  .account-settings__header {
    padding: 1rem;
  }
}

.account-settings__title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #0f1419;
  margin: 0;
}

.dark .account-settings__title {
  color: #ffffff;
}

@media (max-width: 768px) {
  .account-settings__title {
    font-size: 1.25rem;
  }
}

.account-settings__content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 768px) {
  .account-settings__content {
    padding: 1rem;
  }
}

.settings-card {
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  box-shadow: none;
}

.dark .settings-card {
  border-color: #2f3336;
  background: #16181c;
}

.danger-card {
  border-color: #fca5a5;
}

.dark .danger-card {
  border-color: #7f1d1d;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.5rem 0;
}

.card-icon {
  font-size: 1.25rem;
  color: #1d9bf0;
}

.danger-card .card-icon {
  color: #ef4444;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f1419;
  margin: 0;
}

.dark .card-title {
  color: #ffffff;
}

:deep(.p-card-content) {
  padding: 1.5rem;
}

.form-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #0f1419;
}

.dark .field-label {
  color: #ffffff;
}

.security-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.security-button {
  width: 100%;
  justify-content: flex-start;
}

.danger-zone {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.danger-description {
  color: #dc2626;
  font-size: 0.875rem;
  margin: 0;
}

.dark .danger-description {
  color: #fca5a5;
}

.danger-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.danger-button {
  width: 100%;
  justify-content: flex-start;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column-reverse;
  }
  
  .action-buttons button {
    width: 100%;
  }
}
</style>