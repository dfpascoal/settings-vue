export interface MenuItem {
  id: string
  label: string
  icon: string
  route?: string
  items?: SubMenuItem[]
}

export interface SubMenuItem {
  id: string
  label: string
  description?: string
  type: 'toggle' | 'navigate' | 'text'
  value?: boolean | string
  icon?: string
}

export type ThemeMode = 'light' | 'dark'

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  status?: string
}