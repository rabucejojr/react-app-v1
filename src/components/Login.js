import React from 'react'
import './style.css'
import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
function Login() {
  return (
    <section className='login-form-left'>
      <h1>Welcome, User</h1>
      <FormControl className='login-input'>
        <InputLabel htmlFor='component-outlined'></InputLabel>
        <OutlinedInput>id='component-outlined' value='Username'</OutlinedInput>
      </FormControl>
      <FormControl className='login-input'>
        <InputLabel htmlFor='component-outlined'></InputLabel>
        <OutlinedInput>id='component-outlined' value='Password'</OutlinedInput>
      </FormControl>
    </section>
  )
}

export default Login
