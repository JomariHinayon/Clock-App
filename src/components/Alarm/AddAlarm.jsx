import { Box, Stack, Switch, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ExitIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import VibrateIcon from '@mui/icons-material/Vibration';
import RepeatAlarm from './RepeatAlarm';
import AlarmSound from './AlarmSound';
import Label from './Label';


const AddAlarm = () => {
  const navigate = useNavigate();

  return (
  <Box  bgcolor='#1C1C1C' width='100%' height='100vh' padding='1rem 1rem' >
    {/* Top Section */}
      <Stack direction='row' justifyContent='space-between'>
        <Stack 
          direction='row' 
          sx={{color: 'white'}} 
          gap={2} 
          alignItems='center'
        >
          <ExitIcon onClick={() => navigate(-1)} sx={{cursor: 'pointer'}}/>
          <Typography variant='h5' component='p'>Set an alarm</Typography>
        </Stack>
        <CheckIcon sx={{color: '#aaaaaa'}}/>
      </Stack>

    <Stack direction='column' alignItems='stretch' justifyContent='space-between' gap={5}>
      {/* Set Time Section */}
      <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
        <Typography variant='h1' component='h2' color='white'>
          10:21
        </Typography>
        <Stack direction='column' alignItems='center' justifyContent='center'>
          <Typography color='white'>AM</Typography>
          <Typography color='white'>PM</Typography>
        </Stack>
      </Stack>
      <hr/>
      {/* Bottom Section */}
      <Stack direction='column' gap={5} >
        <RepeatAlarm />
        <AlarmSound />
        {/* Vibrate */}
        <Stack direction='row' alignItems='stretch' justifyContent='space-between'>
          <Stack direction='row' gap={5}>
            <VibrateIcon sx={{color: 'white'}}/>
            <Typography sx={{fontSize: '1.2rem'}} component='h6' fontWeight='Bold' color='white'>Vibrate</Typography>
          </Stack>
          <Switch />
        </Stack>
        <Label />
      </Stack>
    </Stack>
  </Box>
  );
};

export default AddAlarm