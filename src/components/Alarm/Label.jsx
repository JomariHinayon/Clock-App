import React from 'react';
import { Typography, Box, Modal, Stack } from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';

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

const Label = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <Stack direction='row' gap={5} alignItems='center' onClick={handleOpen}>
        <LabelIcon sx={{color: 'white'}} />
        <Stack direction='column' >
            <Typography sx={{fontSize: '1.2rem'}} component='h6' fontWeight='Bold' color='white'>Label</Typography>
            <Typography sx={{fontSize: '1rem'}} component='h6' color='#aaaaaa'>Label</Typography>
        </Stack> 
    </Stack>
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

export default Label