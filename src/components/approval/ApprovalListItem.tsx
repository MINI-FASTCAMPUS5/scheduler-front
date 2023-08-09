import React from 'react';
import { approveSchedule, cancelSchedule } from '../../api/admin/approvalPage';
import { useCookies } from 'react-cookie'; // react-cookie 라이브러리 임포트
import { ACCESS_TOKEN } from '@/constants';

interface ScheduleDtoType {
  description: string;
  fullName?: string;
  title: string;
  progress: 'WAITING' | 'ACCEPT' | 'REFUSE';
  scheduleStart: string;
  userScheduleId: number;
}

interface ApprovalListItemProps {
  data: ScheduleDtoType;
}

const ApprovalListItem: React.FC<ApprovalListItemProps> = ({ data }) => {
  const [cookies] = useCookies([ACCESS_TOKEN]); // 쿠키 가져오기

  const handleApprove = async () => {
    const result = await approveSchedule(data.userScheduleId, cookies[ACCESS_TOKEN]);
    if (result) {
      console.info('승인 요청 완료');
      alert('승인되었습니다.'); // 승인 알림 표시
      window.location.replace('/manager/approval'); // 페이지 재로딩
    } else {
      console.error('승인 요청 실패');
      alert('승인 요청에 실패하였습니다.'); // 실패 알림 표시
    }
  };

  const handleCancel = async () => {
    const result = await cancelSchedule(data.userScheduleId, cookies[ACCESS_TOKEN]);
    if (result) {
      console.info('취소 요청 완료');
      alert('취소되었습니다.'); // 취소 알림 표시
      window.location.replace('/manager/approval'); // 페이지 재로딩
    } else {
      console.error('취소 요청 실패');
      alert('취소 요청에 실패하였습니다.'); // 실패 알림 표시
    }
  };

  const approval = {
    accepted: 'flex w-[calc(3vw+5px)] text-[calc(1vw-40%)] border text-point border-confirm rounded-lg justify-center text-sm font-bold text-white border-confirm bg-confirm',
    refused: 'flex w-[calc(3vw+5px)] text-[calc(1vw-40%)] border font-bold text-white border-point bg-point rounded-lg justify-center text-sm',
    textState: 'flex text-[calc(1vw-5px)] text-base justify-center'
  };

  let buttonState;
  let titleState;
  let fullNameState;
  let scheduleStartState;
  let descriptionState;

  switch (data.progress) {
    case 'ACCEPT':
      buttonState = <div className={`${approval['accepted']} text-[calc(1vw-5px)]`}>승인완료</div>;
      titleState = <div className={`${approval['textState']}`}>{data.title}</div>;
      fullNameState = <div className={`${approval['textState']}`}>{data.fullName}</div>;
      descriptionState = <div className={`${approval['textState']}`}>{data.description}</div>;
      scheduleStartState = <div className={`${approval['textState']}`}>{data.scheduleStart}</div>;
      break;
    case 'REFUSE':
      buttonState = <div className={`${approval['refused']} text-[calc(1vw-5px)]`}>거절완료</div>;
      titleState = <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>{data.title}</div>;
      fullNameState = <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>{data.fullName}</div>;
      descriptionState = <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>{data.description}</div>;
      scheduleStartState = <div className={`${approval['textState']} text-[#c3c3c3] line-through`}>{data.scheduleStart}</div>;
      break;
    case 'WAITING':
      buttonState = (
        <div className='flex gap-2'>
          <button
            id={`approve-button-${data.userScheduleId}`}
            className='flex w-[calc(3vw+5px)] text-[calc(1vw-5px)] border text-wait border-wait rounded-lg justify-center text-sm transition hover:bg-wait hover:text-white'
            onClick={() => handleApprove()}
          >z
            승인하기
          </button>
          <button
            id={`cancel-button-${data.userScheduleId}`}
            className='flex w-[calc(3vw+5px)] text-[calc(1vw-5px)] border text-point border-point rounded-lg justify-center text-sm transition hover:bg-point hover:text-white'
            onClick={() => handleCancel()}
          >
            취소하기
          </button>
        </div>
      );
      titleState = <div className={`${approval['textState']}`}>{data.title}</div>;
      fullNameState = <div className={`${approval['textState']}`}>{data.fullName}</div>;
      descriptionState = <div className={`${approval['textState']}`}>{data.description}</div>;
      scheduleStartState = <div className={`${approval['textState']}`}>{data.scheduleStart}</div>;
      break;
  } //r

  return (
    <div className='flex w-full h-[calc(6vh-2px)] mb-[6px] bg-boxbg rounded-xl pr-5 pl-5'>
      <div className='w-[20%] mt-auto mb-auto'>{titleState}</div>
      <div className='w-[40%] mt-auto mb-auto'>{descriptionState}</div>
      <div className='w-[10%] mt-auto mb-auto'>{fullNameState}</div>
      <div className='flex text-[calc(1vw-5px)] mt-auto mb-auto text-base justify-center w-[20%]'>
        {scheduleStartState}
      </div>
      <div className='flex w-[10%] mt-auto mb-auto gap-2 justify-end'>{buttonState}</div>
    </div>
  );
};

export default ApprovalListItem;
