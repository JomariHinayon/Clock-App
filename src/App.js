import { Box, Stack } from '@mui/material';
import './App.css';
import AlarmList from './components/AlarmList';
import Header from './components/Header';
import Navigation from './components/Navigation'

function App() {
  return (
    <Box bgcolor='#1C1C1C' width='100%' height='100vh'>
      <Stack 
        direction='column' 
        justifyContent='space-between'
        height='100%'
      >
        <Header />
        <AlarmList />
        
        <Navigation />
      </Stack>
    </Box>
  );
}

export default App;
