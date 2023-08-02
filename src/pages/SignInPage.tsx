import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  // 이메일, 비밀번호 등의 상태(state)를 관리합니다.
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // 이메일, 비밀번호 입력 형식 체크 상태 (errorMessage)
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  // 형식 체크: 이메일 (@ 혹은 .이 들어가있지 않으면 false)
  const checkEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else setEmailValid(false);
  };

  // 형식 체크: 비밀번호 (8자 이하면 false)
  const checkPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
    const regex = /^(?!.*[^a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+])[a-zA-Z0-9$`~!@$!%*#^?&\\()\-=+]{8,}$/;
    if (regex.test(e.target.value)) {
      setPasswordValid(true);
    } else setPasswordValid(false);
  };

  // 로그인 요청
  const signIn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // 로그인 API 호출
    try {
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });

      // 로그인 성공시 처리 (예: 토큰 저장, 페이지 이동 등)
      const userJwtToken = response.data.data.accessToken;
      // 여기서 토큰을 원하는 곳에 저장하면 됩니다. 예를 들어, 쿠키나 로컬스토리지에 저장 가능합니다.
      alert('로그인 성공! 토큰:' + userJwtToken)
    } catch (error) {
      // 로그인 실패시 처리 (예: 에러 메시지 표시 등)
      console.error('로그인 실패:', error);
    }
  };

  return (
    <section>
      <div className="contentWrap">
        <div className='page_title'>로그인</div>
        <form onSubmit={signIn}>
          <div className="inputBox">
            <input
              type="text"
              className="input-id"
              placeholder="아이디를 입력해 주세요."
              value={email}
              onChange={checkEmail}
            />
            <input
              className="input-pw"
              placeholder="비밀번호를 입력해 주세요."
              defaultValue={password}
              type="password"
              onChange={checkPassword}
            />
            <div className="valid_desc">
              {!emailValid && email.length > 0 && (
                <div className='valid'>
                  <span className='valid__icon'>❗</span>
                  올바른 이메일 형식을 입력해 주세요.
                </div>
              )}
              {!passwordValid && password.length > 0 && (
                <div className='valid'>
                  <span className='valid__icon'>❗</span>
                  비밀번호는 8자 이상입니다.
                </div>
              )}
            </div>
          </div>
          <div className="sign-btn">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={!emailValid || !passwordValid} // 이메일과 비밀번호가 유효하지 않으면 버튼 비활성화
            >
              로그인
            </button>
            <Link to="/SignupPage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;
