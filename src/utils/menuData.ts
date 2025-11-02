import type { MenuItem } from '@/types/settings'

export const menuItems: MenuItem[] = [
  {
    id: 'privacy',
    label: 'Privacidade',
    icon: 'pi pi-lock',
    route: '/settings/privacy',
    items: [
      {
        id: 'private-profile',
        label: 'Perfil privado',
        type: 'toggle',
        value: false
      },
      {
        id: 'tags-mentions',
        label: 'Marcações e menções',
        type: 'navigate',
        icon: 'pi pi-at'
      },
      {
        id: 'online-status',
        label: 'Status online',
        type: 'text',
        value: 'Ninguém'
      },
      {
        id: 'restricted-profiles',
        label: 'Perfis restritos',
        type: 'navigate',
        icon: 'pi pi-users'
      },
      {
        id: 'blocked-profiles',
        label: 'Perfis bloqueados',
        type: 'navigate',
        icon: 'pi pi-ban'
      },
      {
        id: 'hidden-words',
        label: 'Palavras ocultas',
        type: 'navigate',
        icon: 'pi pi-eye-slash'
      }
    ]
  },
  {
    id: 'account-status',
    label: 'Status da conta',
    icon: 'pi pi-user',
    route: '/settings/account-status'
  },
  {
    id: 'account',
    label: 'Conta',
    icon: 'pi pi-id-card',
    route: '/settings/account'
  },
  {
    id: 'help',
    label: 'Ajuda',
    icon: 'pi pi-question-circle',
    route: '/settings/help'
  }
]