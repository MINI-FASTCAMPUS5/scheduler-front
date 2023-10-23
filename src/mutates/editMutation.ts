import { editSchedule } from '@/api/schedule'
import { QueryClient, useMutation } from '@tanstack/react-query'

export const useEditMutation = (queryClient: QueryClient) => {
  const editMutation = useMutation({
    mutationFn: ({ id, formData, token }: { id: string; formData: FormData; token: string }) => {
      return editSchedule(id, formData, token)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    }
  })
  return editMutation
}
