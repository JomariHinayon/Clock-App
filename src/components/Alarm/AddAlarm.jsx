import { Box, Container, Stack, Typography} from '@mui/material'
import React from 'react'
import ExitIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

const AddAlarm = () => {

  return (
  <Box  bgcolor='#1C1C1C' width='100%' height='100vh' padding='1rem 1rem'>
    <Stack direction='row' justifyContent='space-between'>
      <Stack 
        direction='row' 
        sx={{color: 'white'}} 
        gap={2} 
        alignItems='center'
      >
        <ExitIcon />
        <Typography variant='h5' component='p'>Set an alarm</Typography>
      </Stack>
      <CheckIcon sx={{color: '#aaaaaa'}}/>
    </Stack>
  </Box>
  )
}

export default AddAlarm