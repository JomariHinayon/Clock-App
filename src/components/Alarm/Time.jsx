import { Typography } from '@mui/material'
import React from 'react'

const Time = () => {
  return (
    <Typography 
        variant='h2' 
        component='h4' 
        color='white'
    >
    4:30
    <Typography component='span'>
    AM
    </Typography>
    </Typography>
  )
}

export default Time