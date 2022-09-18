import { Container, Stack, Switch} from '@mui/material'
import React from 'react'
import LabelAndRepeat from './LabelAndRepeat'
import Time from './Time'




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
    </Container> 
  )
}

export default AlarmList