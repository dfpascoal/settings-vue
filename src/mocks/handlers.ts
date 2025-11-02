
import { http, HttpResponse } from 'msw'
import type { UpdateUserDto, UpdateSettingsDto, UserSettings } from '@/types/user'
import { mockUser, mockSettings } from '@/mocks/state'

const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

export const handlers = [
  http.get('/api/user', () => HttpResponse.json(mockUser)),

  http.get('/api/user/settings', () => HttpResponse.json(mockSettings)),

  http.put('/api/user', async ({ request }) => {
    const updates = await request.json() as UpdateUserDto
    Object.assign(mockUser, updates) // merge raso 
    await delay(500)
    return HttpResponse.json(mockUser)
  }),

  http.put('/api/user/settings', async ({ request }) => {
    const updates = await request.json() as UpdateSettingsDto

    // merge profund
    const next: UserSettings = {
      ...mockSettings,
      ...updates,
      notifications: {
        ...mockSettings.notifications,
        ...(updates.notifications ?? {}),
      },
    }

    Object.assign(mockSettings, next)
    await delay(500)
    return HttpResponse.json(mockSettings)
  }),

  http.delete('/api/user', async () => {
    await delay(1000)
    return HttpResponse.json({ success: true, message: 'Conta deletada com sucesso' })
  }),

http.post('/api/user/avatar', async ({ request }) => {
  await request.formData() 

  await delay(800)
  const newAvatarUrl = `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
  mockUser.avatar = newAvatarUrl
  return HttpResponse.json({ avatar: newAvatarUrl })
}),
]
