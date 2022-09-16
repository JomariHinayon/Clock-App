import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddAlarm from './components/Alarm/AddAlarm';
import Alarm from './components/Alarm/Alarm';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Alarm />} />
      </Route>
    </Routes>
    <Routes>
      <Route path='AddAlarm' element={<AddAlarm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
