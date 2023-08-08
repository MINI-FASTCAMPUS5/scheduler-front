import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'

type Props = {
  onSubmit: (value: string) => void
}
export default function SearchForm({ onSubmit }: Props) {
  const [value, setValue] = React.useState('')
  return (
    <form
      className='relative text-center'
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <input
        className={
          'bg-main text-white w-[240px] outline-none border-2 border-white rounded-3xl px-4 py-2 placeholder:text-#fcfcfcfc'
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
        <BiSearchAlt2 className='absolute w-6 h-6 text-white z-[998] top-[12px] right-[34px] cursor-pointer' />
      </label>
      <input type='submit' id='searchSubmitBtn' className='hidden' />
    </form>
  )
}
