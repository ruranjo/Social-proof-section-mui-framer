import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { globalTheme } from './config/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider  theme={globalTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
