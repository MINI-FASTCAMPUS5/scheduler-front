import { AddFormInformation } from './AddFormInformation'

export interface ScheduleAddFormData {
  startDate: string
  endDate: string
  title: string
  description: string
  imageFile: File
}

interface AddFormProps {
  date: string
  onCancle: VoidFunction
  onSubmit: (schedule: ScheduleAddFormData) => void
}
export function AddForm({ date, onCancle, onSubmit }: AddFormProps) {
  return (
    <section className='overflow-y-scroll h-full p-4 px-12 scrollbar-hide'>
      <div className='h-full flex flex-col justify-between rounded-2xl'>
        <AddFormInformation date={date} onCancle={onCancle} onSubmit={onSubmit} />
      </div>
    </section>
  )
}
