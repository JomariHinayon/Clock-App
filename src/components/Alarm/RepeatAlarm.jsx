import React from 'react';
import {Box, Typography, Stack, Modal} from '@mui/material';
import RepeatIcon from '@mui/icons-material/FileCopy';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const RepeatAlarm = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <Stack direction='row' gap={5} alignItems='center' onClick={handleOpen}>
          <RepeatIcon sx={{color: 'white'}} />
          <Stack direction='column' >
            <Typography sx={{fontSize: '1.2rem'}} component='h6' fontWeight='Bold' color='white'>Repeat</Typography>
            <Typography sx={{fontSize: '1rem'}} component='p' color='#aaaaaa'>Once</Typography>
          </Stack> 
        </Stack>
        {/* MOdal */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    </>
  )
}

export default RepeatAlarm