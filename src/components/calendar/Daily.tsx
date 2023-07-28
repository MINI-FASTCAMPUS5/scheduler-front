import React from 'react'

type Props = {
  day: string
  color: 'red' | 'blue' | 'black'
}
export default function Daily({ day, color = 'black' }: Props) {
  const textColor = getTextColor(color)

  return <div className={`${textColor}`}>오늘은 {day} 요일~</div>
}

function getTextColor(color: 'red' | 'blue' | 'black') {
  let textColor = color === 'black' && 'text-black'
  textColor = color === 'blue' && 'text-blue-600'
  textColor = color === 'red' && 'text-red-600'
  return textColor
}
