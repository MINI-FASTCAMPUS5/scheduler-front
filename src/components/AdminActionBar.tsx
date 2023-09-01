import { DATE_ROUTE_FORMAT } from '@/constants'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import {
  BiCalendarAlt,
  BiCalendarPlus,
  BiSolidCommentCheck,
  BiSolidUserRectangle
} from 'react-icons/bi'
import { useLocation, useParams } from 'react-router-dom'
import SidebarMenu from './sidebar/SidebarMenu'

export default function AdminActionBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [activeIdx, setActiveIdx] = useState(-1)

  const { year, month, day } = useParams()

  let calendarPath =
    year && month && day
      ? `/calendar/${year}/${month}/${day}`
      : `/calendar/${dayjs().format(DATE_ROUTE_FORMAT)}`

  searchParams.get('keyword') && (calendarPath += `?keyword=${searchParams.get('keyword')}`)

  const sidebarMenu = useMemo(
    () => [
      {
        title: '행사 등록/수정',
        Icon: BiCalendarPlus,
        url: '/manager/event' + calendarPath // * calendarPath는 includes로 검사합니다. 행사 일정 캘린더가 가장 마지막에 있어야 합니다.
      },
      {
        title: '행사 일정 캘린더',
        Icon: BiCalendarAlt,
        url: calendarPath
      },
      {
        title: '신청 승인/취소',
        Icon: BiSolidCommentCheck,
        url: '/manager/approval'
      },
      {
        title: '매니저 페이지',
        Icon: BiSolidUserRectangle,
        url: '/manager/dashboard'
      }
    ],
    [calendarPath]
  )

  useEffect(() => {
    const idx = sidebarMenu.findIndex(({ url }) => location.pathname.includes(url))
    setActiveIdx(() => idx)
  }, [location.pathname, sidebarMenu, activeIdx])

  return (
    <div className='mb-6'>
      {sidebarMenu.map((menu, i) => {
        return (
          <SidebarMenu
            key={`admin-sidebar-menu-${i}`}
            isActive={activeIdx === i}
            onClick={(sidebarIdx) => setActiveIdx(sidebarIdx)}
            idx={i}
            url={menu.url}
          >
            <p className='flex items-center ml-4'>
              <menu.Icon className='mr-4 w-6 h-6' />
              {menu.title}
            </p>
          </SidebarMenu>
        )
      })}
    </div>
  )
}
