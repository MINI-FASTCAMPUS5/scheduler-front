import React, { useState } from 'react'
import Button from '@/components/ui/Button'
import Banner from '@/components/Banner'
import { ScheduleAddFormData } from '@/components/calendar/AddForm'
import { toast } from 'react-toastify'

type Props = {
  date: string
  onCancle: () => void
  onSubmit: (schedule: ScheduleAddFormData) => void
}

export default function EditFormInformation({ date, onSubmit, onCancle }: Props) {
  const [file, setFile] = useState<File>()
  const [imgSrc, setImgSrc] = useState('')
  const [startDate, setStartDate] = useState(date)
  const [endDate, setEndDate] = useState(date)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  //이미지 미리보기
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          const str = base64?.toString()
          if (str && str.length > 1048576 * 10) {
            toast.warn('이미지 크기는 10MB 이하여야 합니다.', {
              position: 'top-center'
            })
            return
          }
          setFile(file)
          setImgSrc(base64.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (!file) {
      toast.warn('이미지를 업로드해주세요', {
        position: 'top-center'
      })
      return
    }
    if (!startDate || !endDate || !title || !description) {
      toast.warn('모든 정보를 입력해주세요', {
        position: 'top-center'
      })
      return
    }
    const newSchedule = {
      startDate,
      endDate,
      title,
      description,
      imageFile: file
    }
    onSubmit(newSchedule)
  }

  return (
    <>
      <div className='flex flex-col text-[34px] font-gmarket font-bold ml-auto mr-auto mt-4'>
        행사 등록
      </div>
      <div className={'flex pb-4 justify-between items-end pt-7'}>
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
        {imgSrc ? (
          <Banner
            className='flex h-full'
            type='side'
            src={imgSrc}
            alt='공연 이미지'
          />
        ) : (
          <Banner
            className='flex h-full'
            type='side'
            src='/mock_image/event_default.jpg'
            alt='공연 이미지'
          />
        )}
      </div>
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
          placeholder='행사명을 입력해주세요'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex justify-between'>
        <span draggable={true} className='text-xl font-bold font-gmarket'>
          행사 설명
        </span>
        <textarea
          className='bg-inputbox p-2 min-w-[380px] max-w-[300px] rounded-[10px] text-[14px] placeholder-[14px] flex items-center'
          rows={3}
          defaultValue={description}
          placeholder='행사 내용을 입력해주세요'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex justify-around py-10 mr-10 ml-10'>
        <Button
          text='행사 추가'
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
