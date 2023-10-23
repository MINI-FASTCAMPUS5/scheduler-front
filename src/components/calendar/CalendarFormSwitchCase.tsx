import { ProviderScheduleWithPos } from '@/utils/calendar'
import { AddForm, AddFormProps } from './AddForm'
import { EditForm, EditFormProps } from './EditForm'
import { ReserveForm, ReserveFormProps } from './ReserveForm'

interface CalendarFromSwitchCaseProps {
  type: DaillyCalendarPortalType
  role: UserRole
  onCancle: VoidFunction
  onEdit: EditFormProps['onEdit']
  onReserve: ReserveFormProps['onReserve']
  onSubmit: AddFormProps['onSubmit']
  schedule: ProviderScheduleWithPos
}
export function CalendarFormSwitchCase({
  type,
  role,
  onCancle,
  onEdit,
  onSubmit,
  onReserve,
  schedule
}: CalendarFromSwitchCaseProps) {
  if (type === 'RESERVE') {
    return <ReserveForm onCancle={onCancle} onReserve={onReserve} schedule={schedule} />
  }
  if (type === 'ADD' && role === 'ADMIN') {
    return <AddForm onCancle={onCancle} onSubmit={onSubmit} />
  }
  if (type === 'EDIT' && role === 'ADMIN') {
    return <EditForm onCancle={onCancle} onEdit={onEdit} schedule={schedule!} />
  }

  return null
}
