import React, { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUser from '@/hooks/user';
import dayjs from 'dayjs';
import { DATE_ROUTE_FORMAT } from '@/constants';

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = useUser(); // setUserInfo 가져오기

  const checkEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else setEmailValid(false);
  };

  const checkPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    const regex = /^(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+])[a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+]{8,}$/;
    if (regex.test(e.target.value)) {
      setPasswordValid(true);
    } else setPasswordValid(false);
  };

  const handleSignIn = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const loggedIn = await login(email, password);
    if (loggedIn) {
      alert('로그인 성공!');
      navigate(`/calendar/${dayjs(new Date()).format(DATE_ROUTE_FORMAT)}`); // 메인 페이지로 이동
      return;
    }
    alert('로그인 실패!'); // 로그인 실패 시 경고 메시지
  };

  return (
    <div className='absolute flex flex-col items-start w-[340px] h-[400px] border-4 p-4 rounded-xl z-[999] top-24 right-48'>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 300 81">
            <image href="/YeonganIdolLogoOrigin.svg" width="300" height="81" />
          </svg>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col items-center"
          >
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-row items-start w-full mb-2"> {/* 가로로 정렬, 간격 추가 */}
                <label htmlFor="email" className="text-gray-600 mb-1">
                  이메일
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={checkEmail}
                  className="py-2  w-340 bg-gray-200 rounded"
                />
              </div>
              {!emailValid && (
                <div className="text-red-600">올바른 이메일 형식을 입력해 주세요.</div>
              )}
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-row items-start w-full mb-2"> {/* 가로로 정렬, 간격 추가 */}
                <label htmlFor="password" className="text-gray-600 mb-1">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={checkPassword}
                  className="py-2  w-340 bg-gray-200 rounded"
                />
              </div>
              {!passwordValid && (
                <div className="text-red-600">비밀번호는 최소 8자 이상이어야 합니다.</div>
              )}
            </div>
            <button
              type="submit"
              className="py-2 px-5 bg-purple-600 text-white rounded disabled:opacity-50 mt-4"
              disabled={!emailValid || !passwordValid}
            >
              로그인
            </button>
          </form>
          <Link
            to="/signup"
            className="text-purple-600 hover:underline mt-4"
          >
            <span className="text-black">아직 계정이 없으신가요?</span> 회원가입
          </Link>

        </div>
      </div>
    </div>
  );
}