import { createRouter, createWebHistory } from 'vue-router'
import SettingsLayout from '@/layouts/SettingsLayout.vue'
import SettingsHome from '@/views/settings/SettingsHome.vue'
import SettingsSubmenu from '@/views/settings/SettingsSubmenu.vue'
import AccountStatus from '@/views/settings/AccountStatus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/settings' },
    {
      path: '/settings',
      component: SettingsLayout,
      children: [
        { path: '', name: 'settings-home', component: SettingsHome },
        { path: 'account-status', name: 'account-status', component: AccountStatus },
        { path: 'account', name: 'account', component: () => import('@/views/settings/Account.vue') },
        { path: 'help', name: 'help', component: () => import('@/views/settings/Help.vue') },
        { path: ':submenu', name: 'settings-submenu', component: SettingsSubmenu }
      ]
    },
    { path: '/:pathMatch(.*)*', redirect: '/settings' }
  ]
})

export default router