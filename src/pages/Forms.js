import React from 'react'
import { FormControl, InputLabel, Input } from '@mui/material'
import { styled } from '@mui/system'

const Form = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

const Inputs = styled('FormControl')({
  padding: '10px',
})

function Forms() {
  return (
    <Form>
      <Inputs>
        <InputLabel htmlFor='uname'>Username</InputLabel>
        <Input id='uname' variant='outlined' />
      </Inputs>
      <Inputs>
        <InputLabel htmlFor='pass'>Password</InputLabel>
        <Input id='pass' aria-describedby='my-helper-text' />
      </Inputs>
    </Form>
  )
}

export default Forms
