import type { User, UserSettings, UpdateUserDto, UpdateSettingsDto } from '@/types/user'

const API_BASE_URL = '/api'

export const userApi = {
  async getUser(): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/user`)
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do usuário')
    }
    return response.json()
  },

  async getSettings(): Promise<UserSettings> {
    const response = await fetch(`${API_BASE_URL}/user/settings`)
    if (!response.ok) {
      throw new Error('Erro ao buscar configurações')
    }
    return response.json()
  },

  async updateUser(data: UpdateUserDto): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Erro ao atualizar dados do usuário')
    }
    
    return response.json()
  },

  async updateSettings(data: UpdateSettingsDto): Promise<UserSettings> {
    const response = await fetch(`${API_BASE_URL}/user/settings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Erro ao atualizar configurações')
    }
    
    return response.json()
  },

  async deleteAccount(): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/user`, {
      method: 'DELETE'
    })
    
    if (!response.ok) {
      throw new Error('Erro ao deletar conta')
    }
    
    return response.json()
  },

  async uploadAvatar(file: File): Promise<{ avatar: string }> {
    const formData = new FormData()
    formData.append('avatar', file)
    
    const response = await fetch(`${API_BASE_URL}/user/avatar`, {
      method: 'POST',
      body: formData
    })
    
    if (!response.ok) {
      throw new Error('Erro ao fazer upload do avatar')
    }
    
    return response.json()
  }
}