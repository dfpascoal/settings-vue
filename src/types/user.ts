
export type OnlineStatus = 'Todos' | 'Apenas amigos' | 'Ninguém'
export type TagsAndMentions = 'Todos' | 'Seguidores' | 'Ninguém'
export type AccountType = 'Pessoal' | 'Empresa' | 'Outro'
export type AccountStatus = 'Ativo' | 'Inativo'

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
}

export interface UserSettings {
  privateProfile: boolean
  onlineStatus: OnlineStatus
  tagsAndMentions: TagsAndMentions
  notifications: NotificationSettings
}


export type UpdateSettingsDto =
  Partial<Omit<UserSettings, 'notifications'>> & {
    notifications?: Partial<NotificationSettings>
  }

export interface User {
  id: string
  name: string
  username: string
  email: string
  phone: string
  avatar: string                
  birthDate: string
  gender: string
  language: string
  timezone: string
  accountType: AccountType
  status: AccountStatus
  createdAt: string
  followers: number
  following: number
  posts: number
}


export type UpdateUserDto = Partial<
  Omit<User, 'id' | 'createdAt' | 'followers' | 'following' | 'posts' | 'status' | 'avatar'>
>
