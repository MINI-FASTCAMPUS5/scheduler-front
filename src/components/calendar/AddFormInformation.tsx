import React, { useState } from 'react'
import Button from '../ui/Button'
import Banner from '../Banner'
import { ScheduleAddFormData } from './AddForm'

type Props = {
  date: string
  onCancle: () => void
  onSubmit: (schedule: ScheduleAddFormData) => void
}

export default function EditFormInformation({ date, onSubmit, onCancle }: Props) {
  const [imgSrc, setImgSrc] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('설명란은 아직 없습니다!')
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
          if (str && str.length > 1048576 * 5) {
            alert('이미지는 5MB이하여야합니다!')
            return
          }
          setImgSrc(base64.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    // todo : validation 체크하기
    const newSchedule = {
      startDate,
      endDate,
      title,
      description,
      image: imgSrc
    }
    onSubmit(newSchedule)
  }

  return (
    <>
      <p className='text-red-500 font-bold'>
        * 더미데이터는 공연 이미지가 없습니다. profile 이미지로 대체합니다.
      </p>
      <div className={'flex pb-4 justify-between items-end pt-4'}>
        <span draggable={true} className='text-xl font-bold flex-1'>
          이미지
        </span>
        {imgSrc ? (
          <Banner
            className='mr-2 p-2 bg-slate-300 rounded-xl'
            type='side'
            src={imgSrc}
            alt='공연 이미지'
          />
        ) : (
          <Banner
            className='mr-2 p-2 bg-slate-300 rounded-xl'
            type='side'
            src='/YeonganIdolLogoOrigin.svg'
            alt='공연 이미지'
          />
        )}
        <div className='filebox mr-4'>
          <label htmlFor='imageUploadInputLabel'>
            <div className='bg-point px-3 min-w-[80px] text-center rounded-full text-white cursor-pointer hover:bg-rose-500 transition-all ease-in-out duration-300'>
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
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold'>
          행사 시작일
        </span>
        <span className='text-lg'>
          <input
            type='date'
            className='bg-slate-100 px-4 rounded-xl'
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
        <span draggable={true} className='text-xl font-bold'>
          행사 종료일
        </span>
        <span className='text-lg'>
          <input
            type='date'
            className='bg-slate-100 px-4 rounded-xl'
            defaultValue={endDate}
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </span>
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold'>
          행사명
        </span>
        <input
          className='bg-slate-100 p-2 min-w-[300px] max-w-[300px] rounded-xl'
          defaultValue={title}
          placeholder='행사명을 입력해주세요'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='flex justify-between pb-4'>
        <span draggable={true} className='text-xl font-bold'>
          행사 설명
        </span>
        <textarea
          className='bg-slate-100 p-2 min-w-[300px] max-w-[300px] rounded-xl'
          rows={3}
          defaultValue={description}
          placeholder='행사 설명을 입력해주세요'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex justify-around py-4'>
        <Button text='추가합니다!' size='lg' className='w-3/12 font-bold' onClick={handleSubmit} />
        <Button
          text='취소!'
          type='red'
          size='lg'
          className='w-3/12 font-bold'
          onClick={() => onCancle()}
        />
      </div>
    </>
  )
}
