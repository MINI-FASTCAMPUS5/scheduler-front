import api from '@/api'
import React, { useState, FormEvent } from 'react'
import { toast } from 'react-toastify'

export default function SignUpTestPage() {
  const [imgSrc, setImgSrc] = useState<File>({} as File)
  const [role, setRole] = useState('USER' as 'ADMIN' | 'USER')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!username || !password || !email || (role !== 'ADMIN' && role !== 'USER')) {
      toast.warn('인풋을 채워주세요!')
      return
    }
    const formData = new FormData()
    formData.append('file', imgSrc)
    formData.append(
      'dto',
      new Blob(
        [
          JSON.stringify({
            fullName: username,
            password: password,
            email: email,
            role: role
          })
        ],
        {
          type: 'application/json'
        }
      )
    )
    api('/join', {
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => console.info(res.data))
      .catch((err) => console.error(err))
  }

  // ! 예시입니다. 지금은 URL string으로 이미지를 보내고 있습니다.
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      setImgSrc(file)

      // const reader = new FileReader()
      // reader.onloadend = () => {
      //   const base64 = reader.result
      //   if (base64) {
      //     const str = base64?.toString()
      //     if (str && str.length > 1048576) {
      //       alert('이미지는 1MB이하여야합니다!')
      //       return
      //     }
      //     setImgSrc(base64.toString())
      //   }
      // }
      // reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      sign up test page
      <form encType='multipart/form-data' onSubmit={onSubmit}>
        <input
          type='file'
          onChange={handleChangeFile}
          accept='image/jpeg, image/png'
          className='upload-name'
        />
        <input
          type='text'
          placeholder='Enter a nickname'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='email'
          placeholder='Entar a vaild email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          name='choice the your position'
          value={role}
          onChange={(e) => setRole(e.target.value as 'ADMIN' | 'USER')}
        >
          <option value='ADMIN'>manager</option>
          <option value='USER'>fan</option>
        </select>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}
