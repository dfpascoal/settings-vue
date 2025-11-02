import { useQuery } from '@tanstack/vue-query'

const fetchUser = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  return await res.json()
}

export function useUserProfile() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })
}
