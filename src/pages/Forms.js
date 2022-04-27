import React from 'react'
import { PasswordInput, TextInput, createStyles, Button } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  TextInput: {
    width: 400,
    padding: theme.spacing.xs,
  },
  PasswordInput: {
    width: 400,
    padding: theme.spacing.xs,
  },
  Button: {
    margin: '10px',
  },
}))

function Forms() {
  const { classes } = useStyles()
  return (
    <>
      <div className={classes.div}>
        <TextInput
          className={classes.TextInput}
          sx={{ '&:hover': { borderColor: 'blue' } }}
          placeholder='Your Name'
          label='Username'
        />
        <PasswordInput
          className={classes.PasswordInput}
          label='Password'
          width='300px'
        />
        <section>
          <Button
            className={classes.Button}
            style={{}}
            sx={(theme) => ({
              '&:hover': { backgroundColor: theme.colors.black },
            })}
          >
            Create
          </Button>
          <Button
            className={classes.Button}
            style={{ marginTop: 5 }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: theme.colors.black },
            })}
          >
            Read
          </Button>
          <Button
            className={classes.Button}
            style={{ marginTop: 5 }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: theme.colors.black },
            })}
          >
            Update
          </Button>
          <Button
            className={classes.Button}
            style={{ marginTop: 5 }}
            sx={(theme) => ({
              '&:hover': { backgroundColor: theme.colors.black },
            })}
          >
            Delete
          </Button>
        </section>
      </div>
    </>
  )
}

export default Forms
