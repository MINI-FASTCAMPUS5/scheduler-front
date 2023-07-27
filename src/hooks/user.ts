import { useEffect, useContext } from 'react'
import { UserContext } from '@/context/UserProvider'

// ! 이 파일은 사용하지 않습니다!
export default function useUser() {
  const { getUserInfo, loading, loggedIn, setUserInfo, setLoading, setLoggedIn } =
    useContext(UserContext)
  useEffect(() => {
    if (getUserInfo().id) return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getUserInfo, loading, loggedIn, setUserInfo, setLoading, setLoggedIn }
}
