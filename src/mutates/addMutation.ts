import { createSchedule } from '@/api/schedule/admin'
import { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { QueryClient, useMutation } from '@tanstack/react-query'

export const useAddMutation = (queryClient: QueryClient) => {
  const addMutation = useMutation({
    mutationFn: ({ schedule, token }: { schedule: ScheduleAddFormData; token: string }) => {
      return createSchedule(schedule, token)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries(['schedule'])
    }
  })
  return addMutation
}
