import { useMemo } from 'react'

interface ReservedCellCoverPops {
  progress: ScheduleProgress
}
export function ReservedCellCover({ progress }: ReservedCellCoverPops) {
  const reserveStyle = useMemo(
    () => ({
      WAITING: {
        from: 'from-wait',
        bg: 'bg-wait'
      },
      ACCEPT: {
        from: 'from-confirm',
        bg: 'bg-confirm'
      },
      REFUSE: {
        from: 'from-point',
        bg: 'bg-point'
      }
    }),
    []
  )

  return (
    <>
      <div
        className={`absolute top-0 w-full h-full bg-gradient-to-t 
                    ${reserveStyle[progress].from} opacity-40 to-transparent z-[0]`}
      />
      <div
        className={`absolute right-2 top-2 w-[10px] h-[10px] rounded-full
                  ${reserveStyle[progress].bg} opacity-100 custom-ping`}
      />
    </>
  )
}
