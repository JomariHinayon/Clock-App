import { Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const LabelAndRepeat = () => {
  return (
    <Container>
        <Stack direction='column' alignItems='center'>        
        <Typography variant='h5' component='p' color='white'>Good Morning!</Typography>
        <Typography variant='h6' component='p' color='white'>Mon,Tue,Wed</Typography>
        </Stack>
    </Container>
  )
}

export default LabelAndRepeat