import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material'
import React, { useState } from 'react'
import AlarmIcon from '@mui/icons-material/Alarm';
import ClockIcon from '@mui/icons-material/AccessTime';
import StopwatchIcon from '@mui/icons-material/Timer';
import TimerIcon from '@mui/icons-material/HourglassBottom';
import AddAlarm from './AddAlarm';
import { BorderTop } from '@mui/icons-material';

const Navigation = () => {
    const [value, setValue] = useState(0);
  return (
    <Stack direction='column' gap={2} fixed>
        <AddAlarm />
        <BottomNavigation 
            showLabels
            value={value}
            onChange={(event, newValue) => {setValue(newValue)}}
            sx={{
                backgroundColor: '#1C1C1C',
                borderTop: '1px solid white'
            }}
        >
            <BottomNavigationAction label='Alarm' icon={<AlarmIcon />}/>
            <BottomNavigationAction label='Alarm' icon={<ClockIcon />}/>
            <BottomNavigationAction label='Alarm' icon={<TimerIcon />}/>
            <BottomNavigationAction label='Alarm' icon={<StopwatchIcon />}/>
        </BottomNavigation>
    </Stack>
  )
}

export default Navigation