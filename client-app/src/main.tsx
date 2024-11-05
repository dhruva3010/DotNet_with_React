import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import './app/layout/styles.css'
import 'semantic-ui-css/semantic.min.css'
import { StoreContext, store } from './app/stores/store.ts'
import { router } from './app/router/Routes.tsx'
import { RouterProvider } from 'react-router-dom'
import ModalContainer from './app/common/modals/ModalContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={store}>
      <ModalContainer />
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </StrictMode>,
)
