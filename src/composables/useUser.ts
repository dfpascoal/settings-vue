import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { userApi } from '@/services/api/userApi'
import type { UpdateUserDto, UpdateSettingsDto } from '@/types/user'

export function useUser() {
  const queryClient = useQueryClient()

  const { 
    data: user, 
    isLoading: isLoadingUser, 
    error: userError,
    refetch: refetchUser
  } = useQuery({
    queryKey: ['user'],
    queryFn: userApi.getUser,
    staleTime: 1000 * 60 * 5, 
  })

  const { 
    data: settings, 
    isLoading: isLoadingSettings, 
    error: settingsError,
    refetch: refetchSettings
  } = useQuery({
    queryKey: ['user-settings'],
    queryFn: userApi.getSettings,
    staleTime: 1000 * 60 * 5, 
  })

  const updateUserMutation = useMutation({
    mutationFn: (data: UpdateUserDto) => userApi.updateUser(data),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['user'], updatedUser)
      console.log(' Usuário atualizado com sucesso!')
    },
    onError: (error) => {
      console.error(' Erro ao atualizar usuário:', error)
    }
  })

  const updateSettingsMutation = useMutation({
    mutationFn: (data: UpdateSettingsDto) => userApi.updateSettings(data),
    onSuccess: (updatedSettings) => {
      queryClient.setQueryData(['user-settings'], updatedSettings)
      console.log(' Configurações atualizadas com sucesso!')
    },
    onError: (error) => {
      console.error(' Erro ao atualizar configurações:', error)
    }
  })

  const deleteAccountMutation = useMutation({
    mutationFn: userApi.deleteAccount,
    onSuccess: () => {
      console.log(' Conta deletada com sucesso!')
      queryClient.clear()

    },
    onError: (error) => {
      console.error(' Erro ao deletar conta:', error)
    }
  })

  const uploadAvatarMutation = useMutation({
    mutationFn: (file: File) => userApi.uploadAvatar(file),
    onSuccess: (data) => {
      if (user.value) {
        queryClient.setQueryData(['user'], {
          ...user.value,
          avatar: data.avatar
        })
      }
      console.log(' Avatar atualizado com sucesso!')
    },
    onError: (error) => {
      console.error(' Erro ao fazer upload do avatar:', error)
    }
  })

  return {
    user,
    settings,
    
    isLoadingUser,
    isLoadingSettings,
    isLoading: isLoadingUser.value || isLoadingSettings.value,
    
    userError,
    settingsError,
    
    refetchUser,
    refetchSettings,
    
    updateUser: updateUserMutation.mutate,
    isUpdatingUser: updateUserMutation.isPending,
    
    updateSettings: updateSettingsMutation.mutate,
    isUpdatingSettings: updateSettingsMutation.isPending,
    
    deleteAccount: deleteAccountMutation.mutate,
    isDeletingAccount: deleteAccountMutation.isPending,
    
    uploadAvatar: uploadAvatarMutation.mutate,
    isUploadingAvatar: uploadAvatarMutation.isPending
  }
}