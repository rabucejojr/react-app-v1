import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Create, Update, Delete } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core/styles'
import Table from '../components/Table'
const useStyles = makeStyles({
  div: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: '1em',
    justifyContent: 'center',
  },
  space: {
    margin: '10px',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSpace: {
    margin: '10px',
  },
  table:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
function Forms() {
  const classes = useStyles()
  return (
    <div className={classes.div}>
      <div className={classes.textfield}>
        <TextField variant='outlined' className={classes.space} />
        <TextField variant='outlined' />
      </div>
      <div className={classes.buttons}>
        <Button variant='contained' color='primary' startIcon={<Create />}>
          Create
        </Button>
        <Button
          className={classes.buttonSpace}
          variant='contained'
          color='primary'
          startIcon={<Update />}
        >
          Update
        </Button>
        <Button variant='contained' color='primary' startIcon={<Delete />}>
          Delete
        </Button>
      </div>
      <div className={classes.table}>
        <Table />
      </div>
    </div>
  )
}

export default Forms
