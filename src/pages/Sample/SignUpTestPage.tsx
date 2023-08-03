import api from '@/api'
import React, { useState, FormEvent } from 'react'

export default function SignUpTestPage() {
  const [imageUrl, setImageUrl] = useState('')
  const [imgSrc, setImgSrc] = useState({})
  const [role, setRole] = useState('USER' as 'ADMIN' | 'USER')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!imageUrl || !username || !password || !email || (role !== 'ADMIN' && role !== 'USER')) {
      alert('인풋을 채워주세요!')
      console.info(imgSrc.toString().length)
      return
    }

    api('/join', {
      method: 'POST',
      data: {
        fullName: username,
        password: password,
        email: email,
        role: role,
        profileImage: imageUrl
      },
      headers: {
        'Content-Type': 'application/json'
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
      //   setImgSrc(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          const str = base64?.toString()
          if (str && str.length > 1048576) {
            alert('이미지는 1MB이하여야합니다!')
            return
          }
          setImgSrc(base64.toString())
        }
      }
      reader.readAsDataURL(file)
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
          placeholder='Enter a url'
          onChange={(e) => setImageUrl(e.target.value)}
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
