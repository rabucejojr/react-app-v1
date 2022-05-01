import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Create, Update, Delete } from '@mui/icons-material'

function Forms() {
  return (
    <div>
      <TextField variant='outlined' />
      <TextField variant='outlined' />
      <Button variant='contained' color='primary' startIcon={<Create />}>
        Create
      </Button>
      <Button variant='contained' color='primary' startIcon={<Update />}>
        Update
      </Button>
      <Button variant='contained' color='primary' startIcon={<Delete />}>
        Delete
      </Button>
    </div>
  )
}

export default Forms
