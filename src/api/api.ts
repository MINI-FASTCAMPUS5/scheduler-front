// export async function signUpUser(
//   email: string,
//   password: string,
//   fullName: string,
//   role: UserRole,
//   profileImage?: File
// ) {
//   try {
//     const formData = new FormData()

//     // 프로필 이미지가 있는 경우에만 FormData에 추가합니다.
//     if (profileImage) {
//       formData.append('file', profileImage)
//     }

//     formData.append(
//       'dto',
//       new Blob([JSON.stringify({ email, password, fullName, role })], {
//         type: 'application/json'
//       })
//     )

//     const response: AxiosResponse<APIResponseBase<{ accessToken: string }>> = await api.post(
//       '/join',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     )

//     return response.data.data
//   } catch (err) {
//     console.error(err)
//     return false
//   }
// }
