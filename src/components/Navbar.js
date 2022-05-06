import React from 'react'
import {createStyles} from '@mantine/core'

const useStyles = createStyles(theme => ({
    root:{
        backgroundColor: theme.colorScheme==='dark'
    },
}));

export default function Navbar() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  )
}
