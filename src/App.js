import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import ExcerciseDetails from './pages/ExcerciseDetails';
import Footer from './componets/Footer';
function App() {
  return (
   <Box width="400px" sx = {{width:{xl:'1400px'}}} m = 'auto'>
    <Navbar />
    <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/excercise/:id' element = {<ExcerciseDetails />} />
    </Routes>
    <Footer />
   </Box>
  );
}

export default App;
