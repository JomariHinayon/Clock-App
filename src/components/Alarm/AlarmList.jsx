import { Container, Stack, Switch, Box, SpeedDialIcon} from '@mui/material'
import React from 'react'
import LabelAndRepeat from './LabelAndRepeat'
import Time from './Time'
import { Link } from 'react-router-dom'



const AlarmList = () => {
  return (
    <Container 
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem 0',
      }}
    >
      <Stack  
          direction='row' 
          alignItems='center'
          justifyContent='space-between'
      >
          <Time />
          <LabelAndRepeat />
          <Switch />
      </Stack>
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
      <Link to='AddAlarm'>
        <SpeedDialIcon sx={{ color: 'white'}}/>
      </Link> 
    </Box>
    </Container> 
  )
}

export default AlarmList