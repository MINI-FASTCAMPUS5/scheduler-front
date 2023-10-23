import UserProvider from '@/context/UserProvider'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/index.css'
import { handleError } from './queries'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => handleError(err)
  }),
  // mutationCache: new MutationCache({
  //   onError(error) {
  //     handleError(error)
  //   }
  // }),
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <App />
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </CookiesProvider>
)
