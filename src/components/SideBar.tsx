import useUser from '@/hooks/user'
import React from 'react'

export default function SideBar() {
  const { getUserInfo } = useUser()
  const user = getUserInfo()

  const buttonStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded'
  return (
    <aside className='bg-slate-300 min-w-[12rem] sm:min-w-[15rem] md:min-w-[18rem] transition-all ease-out duration-75 p-2'>
      <h1 className='text-xl'>Side Bar</h1>
      <div className='flex flex-col h-[95%] justify-between'>
        <div>
          {user.role === 'USER' && (
            <>
              <div className={`${buttonStyle}`}>행사 신청 캘린더</div>
              <div className={`${buttonStyle}`}>마이 페이지</div>
            </>
          )}
          {user.role === 'ADMIN' && (
            <>
              <div className={`${buttonStyle}`}>행사 일정 캘린더</div>
              <div className={`${buttonStyle}`}>행사 등록/수정</div>
              <div className={`${buttonStyle}`}>신청 승인/거절</div>
            </>
          )}
        </div>
        <div>
          <img
            className='w-20 h-20 rounded-[2.5rem]'
            src={`http://localhost:5173/${user.profileImage}`}
          />
          <h2 className='text-xl'> {user.fullName}</h2>
          <div className={`${buttonStyle}`}>회원 정보 수정</div>
          <div className={`${buttonStyle}`}>로그아웃</div>
        </div>
      </div>
    </aside>
  )
}
