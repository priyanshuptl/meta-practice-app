import { Routes, Route } from 'react-router-dom';

import Homepage from 'components/Homepage';

import './styles.css';

const Main = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/about' element={<div>About</div>} />
        <Route path='/menu' element={<div>Menu</div>} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default Main;
