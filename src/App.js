import React from 'react'
import './App.css'
import Forms from './pages/Forms'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    main: '#ffb74d',
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Forms/>
      </ThemeProvider>
    </>
  )
}

export default App
