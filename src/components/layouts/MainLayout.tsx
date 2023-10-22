import { Scene } from '@/components/ui/animation/Scene'
import { DATE_ROUTE_FORMAT } from '@/constants'
import { useUser } from '@/hooks/user'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const { loading, loggedIn } = useUser()

  useEffect(() => {
    const date = dayjs().format(DATE_ROUTE_FORMAT)
    if (loggedIn) window.location.replace(`/calendar/${date}`)
  }, [loggedIn])

  return (
    <div className='h-[100vh] w-[100vw]'>
      <div className=' absolute flex text-[50px] z-40 top-5 left-8'>
        <img src='/YeonganIdolLogoWhite.svg' className='w-[600px]' />
      </div>
      <div className=' absolute flex text-[16px] z-40 bottom-9 left-8 text-white opacity-50'>
        © 2023. 12 GROUP All rights reserved.
      </div>
      <div className=' absolute flex text-[10px] z-40 bottom-5 left-8 text-white opacity-50'>
        Illustrated by Chulmin Park & Source Zustand
      </div>
      {!loggedIn && !loading && (
        <main className='absolute flex h-[100vh] w-[100vw] p-auto'>
          <div className=' flex w-[480px] bg-white p-10 rounded-[20px] z-[999] m-auto mr-[300px] shadow-xl'>
            <Outlet />
          </div>
        </main>
      )}
      <Scene />
    </div>
  )
}
