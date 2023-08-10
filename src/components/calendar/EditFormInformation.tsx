import { ProviderScheduleWithPos } from '@/utils/calendar'
import React, { useState } from 'react'
import Banner from '@/components/Banner'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '@/constants'
import Button from '@/components/ui/Button'
import useUser from '@/hooks/user'
import { toast } from 'react-toastify'

type Props = {
  schedule: ProviderScheduleWithPos
  onCancle: () => void
  onEdit: (
    schedule: ProviderScheduleWithPos & {
      imgFile?: File
    }
  ) => unknown
}

export default function EditFormInformation({ schedule, onEdit, onCancle }: Props) {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const [imgSrc, setImgSrc] = useState('')
  const [imgFile, setImgFile] = useState<File>()
  const date = dayjs(new Date()).format(DATE_FORMAT)
  const [startDate, setStartDate] = useState(schedule.startDate)
  const [endDate, setEndDate] = useState(schedule.endDate)
  const [title, setTitle] = useState(schedule.title)
  const [description, setDescription] = useState(schedule.description)
  //이미지 미리보기
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          const str = base64?.toString()
          if (str && str.length > 1048576 * 10) {
            toast.warn('이미지는 10MB이하여야합니다.')
            return
          }
          setImgFile(files[0])
          setImgSrc(base64.toString())
        }
      }
      reader.readAsDataURL(files[0])
    }
  }

  const handleSubmit = () => {
    const newSchedule = {
      ...schedule,
      startDate: startDate ? startDate : schedule.startDate,
      endDate: endDate ? endDate : schedule.endDate,
      title,
      description,
      imgFile
    }
    onEdit(newSchedule)
  }

  return (
    <>
      <div className='flex flex-col text-[34px] font-gmarket font-bold ml-auto mr-auto mt-4'>
        행사 수정
      </div>
      <div className={'flex pb-4 justify-between items-end pt-4'}>
        <span draggable={true} className='text-xl font-bold flex-1 font-gmarket'>
          이미지
        </span>
        <div className='filebox mr-4'>
          <label htmlFor='imageUploadInputLabel'>
            <div className='bg-point px-3 min-w-[70px] text-center rounded-full text-white cursor-pointer hover:bg-wait transition-all ease-in-out duration-300 font-gmarket text-[14px] pt-[1px] font-bold'>
              업로드
            </div>
          </label>
          <input
            id='imageUploadInputLabel'
            type='file'
            onChange={handleChangeFile}
            accept='image/jpeg, image/png'
            className='upload-name'
          />
        </div>
        <div className='flex bg-white w-[180px] h-[90px] rounded-2xl overflow-hidden border mt-3 justify-center'>
          {imgFile ? (
            <Banner className='flex h-full' type='side' src={imgSrc} alt='공연 이미지' />
          ) : (
            <Banner className='flex h-full' type='side' src={schedule.image} alt='공연 이미지' />
          )}
        </div>
      </div>
      <div className={'flex pb-4 justify-between pt-4'}>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사 날짜
        </span>
        <span className='text-[16px] text-[#696969] font-gmarket'>
          {schedule.startDate} ~ {schedule.endDate}
        </span>
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사 시작일
        </span>
        <span className='text-[16px] text-[#696969]'>
          <input
            type='date'
            className='bg-inputbox rounded-[10px] h-[30px] pl-[12px] pr-[12px]'
            min={date}
            defaultValue={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
              if (e.target.value > endDate) setEndDate(e.target.value)
            }}
          />
        </span>
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사 종료일
        </span>
        <span className='text-[16px] text-[#696969]'>
          <input
            type='date'
            className='bg-inputbox rounded-[10px] h-[30px] pl-[12px] pr-[12px]'
            defaultValue={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </span>
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사명
        </span>
        <input
          className='bg-inputbox p-2 min-w-[380px] max-w-[300px] rounded-[10px] text-[14px] placeholder-[14px] flex items-center'
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사 설명
        </span>
        <textarea
          className='bg-inputbox p-2 min-w-[380px] max-w-[300px] rounded-[10px] text-[14px] placeholder-[14px] flex items-center'
          rows={3}
          defaultValue={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex justify-around py-10 mr-10 ml-10'>
        <Button
          disabled={user.id !== schedule.userId}
          text={user.id !== schedule.userId ? '권한 없음!' : '수정하기'}
          size='lg'
          className='w-[200px] h-[40px] font-bold font-gmarket'
          onClick={handleSubmit}
        />
        <Button
          text='취소'
          type='red'
          size='lg'
          className='w-[200px] h-[40px] font-bold font-gmarket'
          onClick={() => onCancle()}
        />
      </div>
    </>
  )
}
