import type { User, UserSettings } from '@/types/user'

export const seedUser: User = {
  id: '1',
  name: 'João Silva',
  username: 'joaosilva',
  email: 'joao.silva@example.com',
  phone: '+55 11 98765-4321',
  avatar: 'https://i.pravatar.cc/150?img=12',
  birthDate: '1995-06-15',
  gender: 'Masculino',
  language: 'Português (Brasil)',
  timezone: 'America/Sao_Paulo',
  accountType: 'Pessoal',
  status: 'Ativo',
  createdAt: '2023-01-15',
  followers: 245,
  following: 189,
  posts: 87,
}

export const seedSettings: UserSettings = {
  privateProfile: false,
  onlineStatus: 'Ninguém',
  tagsAndMentions: 'Todos',
  notifications: { email: true, push: true, sms: false },
}

export let mockUser: User = { ...seedUser }
export let mockSettings: UserSettings = { ...seedSettings }

export function resetMocks() {
  mockUser = { ...seedUser }
  mockSettings = { ...seedSettings }
}
