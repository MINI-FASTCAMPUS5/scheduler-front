import React from 'react'
import { ProviderScheduleWithPos } from '@/utils/calendar'
import EditFormInformation from './EditFormInformation'

type Props = {
  schedule: ProviderScheduleWithPos
  onCancle: () => void
  onEdit: (
    schedule: ProviderScheduleWithPos & {
      imgFile?: File
    }
  ) => void
}

export default function EditForm({ schedule, onCancle, onEdit }: Props) {
  return (
    <section className='overflow-y-scroll h-full p-4 px-12 scrollbar-hide'>
      <div className='h-full flex flex-col justify-between rounded-2xl'>
        <EditFormInformation schedule={schedule} onCancle={onCancle} onEdit={onEdit} />
      </div>
    </section>
  )
}
