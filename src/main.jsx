import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

//Cấu hình react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Cấu hình MUI Dialog
import { ConfirmProvider } from 'material-ui-confirm'

import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ConfirmProvider
        defaultOptions={{
          dialogProps: { maxWidth: 'xs' },
          cancellationButtonProps: { color: 'inherit' },
          confirmationButtonProps: { color: 'primary', variant: 'outlined' }
        }}
      >
        <CssBaseline />
        <App />
        <ToastContainer position="bottom-left" theme="colored" />
      </ConfirmProvider>
    </CssVarsProvider>
  </React.StrictMode>
)
