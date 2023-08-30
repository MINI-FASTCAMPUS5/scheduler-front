import api from '@/api'
import Banner from '@/components/Banner'
import SideBar from '@/components/SideBar'
import { ACCESS_TOKEN, DATE_REQEUST_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function ScheduleAddTestPage() {
  const [cookie] = useCookies([ACCESS_TOKEN])
  const [file, setFile] = useState<File>()
  const [title, setTitle] = useState('')
  const [scheduleStart, setScheduleStart] = useState('')
  const [scheduleEnd, setScheduleEnd] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    // * 2021-10-01T00:00:00 시간정보는 없기 때문에 이런식으로 보냅니다.
    // eslint-disable-next-line quotes
    const formData = new FormData()
    formData.append('file', file as Blob)
    formData.append(
      'dto',
      new Blob(
        [
          JSON.stringify({
            title: title,
            scheduleStart: dayjs(scheduleStart).format(DATE_REQEUST_FORMAT),
            scheduleEnd: dayjs(scheduleEnd).format(DATE_REQEUST_FORMAT),
            description: description
          })
        ],
        {
          type: 'application/json'
        }
      )
    )
    api('/admin/schedule/create', {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${cookie.AccessToken}`
      }
    })
      .then((res) => {
        console.info(res)
      })
      .catch((err) => {
        console.info(err)
      })
  }

  return (
    <div className='grid grid-cols-cal-frame-w'>
      <SideBar />
      {/*  max-w-[1432px] px-[0.25rem]는 켈린더 최대 너비입니다. */}

      <div className='mb-12 min-w-[760px] max-w-[1432px] px-[1.25rem]'>
        <Banner className='py-4' src='/newjeans_ad.png' type='top' alt='newjeans banner' />
        <div>
          <input type='text' placeholder='title' onChange={(e) => setTitle(e.target.value)} />
          <input
            type='date'
            placeholder='scheduleStart'
            onChange={(e) => setScheduleStart(e.target.value)}
          />
          <input
            type='date'
            placeholder='scheduleEnd'
            onChange={(e) => setScheduleEnd(e.target.value)}
          />
          <input
            type='text'
            placeholder='description'
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type='file'
            placeholder='file'
            onChange={(e) => {
              if (e.target.files) setFile(e.target.files[0])
            }}
          />
          <button type='button' onClick={handleSubmit}>
            Add Schedule
          </button>
        </div>
      </div>
    </div>
  )
}
