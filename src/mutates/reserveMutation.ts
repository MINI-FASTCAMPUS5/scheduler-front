import { addSchedule } from '@/api/schedule'
import { QueryClient, useMutation } from '@tanstack/react-query'

export const useReserveMutation = (queryClient: QueryClient, token: string) => {
  const reserveMutation = useMutation({
    mutationFn: ({ adminId, selectDate }: { adminId: string; selectDate: string }) => {
      return addSchedule(adminId, selectDate, token)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    }
  })
  return reserveMutation
}
