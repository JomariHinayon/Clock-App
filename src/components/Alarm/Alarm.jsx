import React from 'react'
import { Box, Stack } from '@mui/material';
import AlarmList from './AlarmList';
import Header from './../Header';


const Alarm = () => {
  return (
    <Box bgcolor='#1C1C1C' width='100%' height='100vh'>
      <Stack 
        direction='column' 
        justifyContent='space-between'
        height='100%'
      >
        <Header />
        <AlarmList />
      </Stack>
    </Box>
  )
}

export default Alarm