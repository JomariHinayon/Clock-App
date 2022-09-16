import { BottomNavigation, BottomNavigationAction, Stack } from '@mui/material'
import React, { useState } from 'react'
import AlarmIcon from '@mui/icons-material/Alarm';
import ClockIcon from '@mui/icons-material/AccessTime';
import StopwatchIcon from '@mui/icons-material/Timer';
import TimerIcon from '@mui/icons-material/HourglassBottom';
import { Link, Outlet } from 'react-router-dom';


const Layout = () => {
    const [value, setValue] = useState(0);
  return (
    <>
    <Outlet />
    <Stack direction='column' gap={2} fixed>
        <BottomNavigation 
            showlabels
            value={value}
            onChange={(event, newValue) => {setValue(newValue)}}
            sx={{
                backgroundColor: '#1C1C1C',
                borderTop: '1px solid white'
            }}
        >
            <Link to='/'>
                <BottomNavigationAction label='Alarm' icon={<AlarmIcon />}/>
            </Link>
            <Link to='/clock'>
                <BottomNavigationAction label='Clock' icon={<ClockIcon />}/> 
            </Link>
            <Link to='/timer'>
                <BottomNavigationAction label='Timer' icon={<TimerIcon />}/>
            </Link>
            <Link to='/stopwatch'>
                <BottomNavigationAction label='Stopwatch' icon={<StopwatchIcon />}/>
            </Link>
        </BottomNavigation>
    </Stack>
    </>
  )
}

export default Layout