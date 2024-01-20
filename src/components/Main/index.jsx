import { Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';

import Homepage from 'components/Homepage';
import BookingPage from 'components/BookingPage';
import { BookingDetailContextProvider } from 'contexts/BookingDetailContext';
import { occasions } from 'components/BookingForm';

import './styles.css';

const availableTimesInADay = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
];

const initializeTimes = () => {
  return availableTimesInADay;
};

const updateTimes = (state = [], action) => {
  switch (action.type) {
    case 'reserve': {
      return state.filter((time) => time !== action.time);
    }

    case 'reset': {
      return availableTimesInADay;
    }

    default:
      return { ...state };
  }
};

const Main = () => {
  const [date, setDate] = useState('');
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    date,
    initializeTimes
  );
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState(occasions[0]);

  return (
    <BookingDetailContextProvider
      value={{
        date,
        setDate,
        time,
        setTime,
        guests,
        setGuests,
        occasion,
        setOccasion,
        availableTimes,
        dispatch,
      }}>
      <main className='main'>
        <Routes>
          <Route path='/about' element={<div>About</div>} />
          <Route path='/menu' element={<div>Menu</div>} />
          <Route path='/booking' element={<BookingPage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
    </BookingDetailContextProvider>
  );
};

export default Main;
