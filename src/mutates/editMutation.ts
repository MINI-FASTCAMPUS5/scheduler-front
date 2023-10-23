import api from '@/api'
import { QueryClient, useMutation } from '@tanstack/react-query'

export const useEditMutation = (queryClient: QueryClient) => {
  const editMutation = useMutation({
    mutationFn: ({ id, formData, token }: { id: string; formData: FormData; token: string }) => {
      return api(`/admin/schedule/update/${id}`, {
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token
        }
      })
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    },
    onError: (error) => {
      console.error(error)
    }
  })

  return editMutation
}
