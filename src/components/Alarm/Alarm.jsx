import React from 'react'
import { Box, Stack, SpeedDialIcon } from '@mui/material';
import AlarmList from './AlarmList';
import Header from './../Header';
import { Link } from 'react-router-dom'


const Alarm = () => {
  return (
    <Box bgcolor='#1C1C1C' width='100%' height='100vh' paddingBottom={2}>
      <Stack 
        direction='column' 
        justifyContent='space-between'
        height='100%'
      >
        <Header />
        <AlarmList />
        {/* Add new alarm  */}
        <Link to='AddAlarm'>
        <Box 
        component='span' 
        sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px auto', 
            width: '40px',
            height: '40px',
            backgroundColor:'green',
            borderRadius: '100%',
            
          }}
        >
          <SpeedDialIcon sx={{ color: 'white'}}/>
        </Box>
        </Link> 
      </Stack>
    </Box>
  )
}

export default Alarm