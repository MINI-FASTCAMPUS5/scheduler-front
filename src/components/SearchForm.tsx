import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

type Props = {
  onSubmit: (value: string) => void
}
export default function SearchForm({ onSubmit }: Props) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const [value, setValue] = React.useState(searchParams.get('keyword') || '')
  const searchToast = () =>
    toast.info(`${value}(을)를 검색합니다`, {
      position: 'top-center',
      autoClose: 1500
    })
  return (
    <form
      className='relative text-center'
      onSubmit={(e) => {
        e.preventDefault()
        searchToast()
        onSubmit(value)
        setValue('')
      }}
    >
      <div className='transition hover:scale-105'>
        <input
          className={
            'bg-main text-white w-[210px]items-center outline-none border-2 border-white rounded-[18px] px-4 py-2 placeholder-white placeholder:text-[14px] focus:opacity-100 focus:ring-2 focus:ring-point focus:border-point'
          }
          type='text'
          value={value}
          minLength={2}
          maxLength={10}
          required
          onChange={(e) => setValue(e.target.value)}
          placeholder='기획사를 입력해주세요!'
        />
        <label htmlFor='searchSubmitBtn'>
          <BiSearchAlt2 className='absolute w-6 h-6 text-white z-[998] top-[10px] right-[55px] cursor-pointer' />
        </label>
        <input type='submit' id='searchSubmitBtn' className='hidden' />
      </div>
    </form>
  )
}
