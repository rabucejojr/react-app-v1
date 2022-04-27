import React from 'react'
import {
  PasswordInput,
  TextInput,
  createStyles,
  Button,
  Table,
} from '@mantine/core'

const elements = [
  { name: 'asdasd', password: '123456' },
  { name: 'fhfghfgh', password: '2424' },
  { name: 'sdfsdfsdg', password: '45453' },
  { name: 'gdfgdfgdfg', password: '564545' },
]
const rows = elements.map((element) => (
  <tr key={element.name}>
    <td>{element.name}</td>
    <td>{element.password}</td>
  </tr>
))

const useStyles = createStyles((theme) => ({
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
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
  Table: {
    paddingTop: '10px',
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
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
        {/* Table */}
        <div>
          <section>
            <Table
              verticalSpacing='md'
              highlightOnHover
              horizontalSpacing='md'
              className={classes.Table}
            >
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>PASSWORD</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </section>
        </div>
      </div>
    </>
  )
}

export default Forms
