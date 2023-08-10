import useUser from '@/hooks/user'
import React from 'react'
import AddEventList from '@/components/dashboard/AddEventList'
import EventStatusCard from '@/components/dashboard/EventStatusCard'
import userDefaultImg from '/mock_image/user_default.png'
import { useCookies } from 'react-cookie'
import { getAdminDashbordlList } from '@/api/admin/adminPage'
import { useQuery } from '@tanstack/react-query'

export default function ManagerDashboardPage() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const defaultprofileImage = userDefaultImg

  const [cookie] = useCookies(['AccessToken'])

  const { data, isSuccess } = useQuery(
    ['DashboardList', user.id ? user.id : ''],
    () => getAdminDashbordlList(cookie.AccessToken),
    {
      staleTime: 1000 * 60 * 5
    }
  )

  return (
    <div className='flex flex-col pt-2 pb-2 ml-8 mr-8 h-[100vh]'>
      <div className='flex flex-col font-bold text-4xl mt-10 font-gmarket'>
        매니저 대시보드
        <div className='border-b-2 border-boxline mb-6 mt-3' />
      </div>
      <div className='flex w-full h-full'>
        <div className='flex border w-2/5 mr-10 border-boxline overflow-hidden justify-center pt-auto pb-auto rounded-3xl relative'>
          {/* 프로필 이미지 */}
          <div className='flex flex-col absolute z-20 m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition hover:scale-[0.98]'>
            {user.profileImage ? (
              <img
                className='flex ml-auto mr-auto w-32 h-32 rounded-full aspect-square object-cover border border-boxline shadow-xl'
                src={user.profileImage}
              />
            ) : (
              <img
                className='flex ml-auto mr-auto mt-80 w-32 h-32 rounded-full aspect-square object-cover border border-boxline shadow-xl'
                src={`${defaultprofileImage}`}
              />
            )}
            <div className='flex mt-8 text-3xl font-bold justify-center'>{user.fullName}</div>
            <div className='flex text-lg justify-center'>{user.email}</div>
          </div>
          <div
            className='w-full h-full bg-white bg-opacity-10 absolute z-10'
            style={{ backdropFilter: 'blur(30px)' }}
          />
          {/* 프로필 배경 이미지 */}
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
        <div className='flex flex-col ml-5 w-3/6 h-[100%]'>
          {isSuccess && data && <EventStatusCard events={data.registeredEventCount} waiting={data.countProcessDTO.waiting} accepted={data.countProcessDTO.accepted} refused={data.countProcessDTO.refused} />}
          {isSuccess && data && <AddEventList data={data}/>}
        </div>
      </div>
    </div>
  )
}