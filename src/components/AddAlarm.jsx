import { Box, SpeedDialIcon } from '@mui/material'
import React from 'react'

const AddAlarm = () => {
  return (
    <Box 
        component='span' 
        sx={{ 
            margin: '0px auto', 
            width: '40px',
            textAlign: 'center',
            height: '40px',
            backgroundColor:'green',
            borderRadius: '100%'
        }}
    >
        <SpeedDialIcon 
            sx={{
                color: 'white'
            }}
        />
    </Box>
  )
}

export default AddAlarm