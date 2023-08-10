import React from 'react'
import ApprovalList from '@/components/approval/ApprovalList'
import { useQuery } from '@tanstack/react-query'
import { useCookies } from 'react-cookie'
// import QuickState from '@/components/approval/QuickState'
import { getAdminApprovallList } from '@/api/admin/approvalPage'
import useUser from '@/hooks/user'
import QuickState from '@/components/approval/QuickState'


export default function ApprovalPage() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()
  const [cookie] = useCookies(['AccessToken'])

  const { data, isSuccess } = useQuery(
    ['ApprovalList', user.id ? user.id : ''],
    () => getAdminApprovallList(cookie.AccessToken),
    {
      staleTime: 1000 * 60 * 5
    }
  )

  return (
    <div className='flex flex-col pt-2 pb-2 ml-8 mr-8 h-[100vh]'>
      <div className='flex flex-col font-bold text-4xl mt-10 relative font-gmarket'>
        신청 승인/거절
        <div className='border-b-2 border-boxline mb-6 mt-3' />
        {isSuccess && data &&(
        <QuickState state={data.countProcessDto}/>
        )}
      </div>
      {isSuccess&& data && <ApprovalList data={data.implScheduleDto}/>}
    </div>
  )
}
