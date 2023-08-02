import React from 'react'
import ApprovalList from './ApprovalList'

export default function ApprovalPage() {
  return (
    <div className='m-2 h-98vh overflow-y-hidden'>
      {/* 신청 승인/거절 */}
      <ApprovalList />
    </div>
  )
}
