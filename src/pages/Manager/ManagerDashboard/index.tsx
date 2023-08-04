import useUser from '@/hooks/user'
import React from 'react'
import AddEventList from './AddEventList'
import EventStatusCard from './EventStatusCard'
import userDefaultImg from '/mock_image/user_default.png'

export default function ManagerDashboardPage() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const defaultprofileImage = userDefaultImg

  return (
    <div className='flex flex-col m-2 ml-8 h-98vh overflow-hidden'>
      <div className='flex flex-col font-bold text-4xl mt-10'>
        매니저 대시보드
        <div className='border-b-2 border-boxline mb-6 mt-3' />
      </div>
      <div className='flex w-full h-[900px] ml-4'>
        <div className='flex border w-2/5 mr-10 border-boxline overflow-hidden  rounded-3xl relative'>
          <div className='flex flex-col m-auto absolute left-0 right-0 top-0 bottom-0 z-20'>
            {user.profileImage ? (
              <img
                className='flex ml-auto mr-auto mt-80 w-32 h-32 rounded-full aspect-square object-cover border border-boxline'
                src={user.profileImage}
              />
            ) : (
              <img
                className='flex ml-auto mr-auto mt-80 w-32 h-32 rounded-full aspect-square object-cover border border-boxline'
                src={`${defaultprofileImage}`}
              />
            )}
            <div className='flex mt-8 text-3xl font-bold justify-center'>하이브</div>
            <div className='flex text-lg justify-center'>hybe@naver.com</div>
          </div>
          <div
            className='w-full h-full bg-white bg-opacity-10 absolute z-10'
            style={{ backdropFilter: 'blur(30px)' }}
          />
          {user.profileImage ? (
            <div
              className='w-full h-full bg-center bg-no-repeat bg-cover'
              style={{ backgroundImage: `url(${user.profileImage})` }}
            />
          ) : (
            <img
              className='w-full h-full bg-center bg-no-repeat bg-cover'
              src={`${defaultprofileImage}`}
            />
          )}
        </div>
        <div className='flex flex-col ml-5 w-3/6'>
          <EventStatusCard />
          <AddEventList />
          <div className='flex w-full gap-5 mt-5 mb-12 pl-10 pr-10'>
            <button className='flex h-20 w-full pt-6 text-white text-2xl font-bold justify-center bg-main rounded-3xl transition hover:bg-[#411b92]'>
              행사 등록하기
            </button>
            <button className='flex h-20 w-full pt-6 text-white text-2xl font-bold justify-center bg-wait rounded-3xl transition hover:bg-[#ef8a0f]'>
              신청자 승인/취소 관리
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
