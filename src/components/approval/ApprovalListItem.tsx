import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ApprovalListItem({ data }: any) {
  const approval = {
    accepted:
      'flex w-[calc(3vw+5px)] text-[calc(1vw-40%)] border text-point border-confirm rounded-lg justify-center text-sm font-bold text-white border-confirm bg-confirm',
    refused:
      'flex w-[calc(3vw+5px)] text-[calc(1vw-40%)] border font-bold text-white border-point bg-point rounded-lg justify-center text-sm',
    textState: 'flex text-[calc(1vw-5px)] text-base justify-center'
  }

  //승인요청 API 기능 예정 승인요청 -> useEffact 반응
  //취소요청 API 기능 예정 취소요청 -> useEffact 반응

  let buttonState
  let titleState
  let fullNameState
  let scheduleStartState
  let descriptionState
  switch (data.progress) {
    case 'ACCEPT':
      buttonState = <div className={`${approval['accepted']} text-[calc(1vw-5px)]`}>승인완료</div>
      titleState = <div className={`${approval['textState']}`}>{data.title}</div>
      fullNameState = <div className={`${approval['textState']}`}>{data.fullName}</div>
      descriptionState = <div className={`${approval['textState']}`}>{data.description}</div>
      scheduleStartState = <div className={`${approval['textState']}`}>{data.scheduleStart}</div>
      break
    case 'REFUSE':
      buttonState = <div className={`${approval['refused']} text-[calc(1vw-5px)]`}>거절완료</div>
      titleState = (
        <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>{data.title}</div>
      )
      fullNameState = (
        <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>
          {data.fullName}
        </div>
      )
      descriptionState = (
        <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>
          {data.description}
        </div>
      )
      scheduleStartState = (
        <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>
          {data.scheduleStart}
        </div>
      )
      break
    case 'WAITING':
      buttonState = (
        <div className='flex gap-2'>
          <button className='flex w-[calc(3vw+5px)] text-[calc(1vw-5px)] border text-wait border-wait rounded-lg justify-center text-sm transition hover:bg-wait hover:text-white'>
            승인하기
          </button>
          <button className='flex w-[calc(3vw+5px)] text-[calc(1vw-5px)] border text-point border-point rounded-lg justify-center text-sm transition hover:bg-point hover:text-white'>
            취소하기
          </button>
        </div>
      )
      titleState = <div className={`${approval['textState']}`}>{data.title}</div>
      fullNameState = <div className={`${approval['textState']}`}>{data.fullName}</div>
      descriptionState = <div className={`${approval['textState']}`}>{data.description}</div>
      scheduleStartState = <div className={`${approval['textState']}`}>{data.scheduleStart}</div>
      break
  }

  return (
    <div className='flex w-full h-[calc(6vh-2px)] mb-[6px] bg-boxbg rounded-xl pr-5 pl-5'>
      <div className='w-[20%] mt-auto mb-auto'>{titleState}</div>
      <div className='w-[40%] mt-auto mb-auto'>{descriptionState}</div>
      <div className='w-[10%] mt-auto mb-auto'>{fullNameState}</div>
      <div className='flex text-[calc(1vw-5px)] mt-auto mb-auto text-base justify-center w-[20%]'>
        {scheduleStartState}
      </div>
      <div className='flex w-[10%] mt-auto mb-auto gap-2 justify-end'>{buttonState}</div>
    </div>
  )
}
