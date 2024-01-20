import { Routes, Route } from 'react-router-dom';
import { useReducer, useState } from 'react';

import Homepage from 'pages/Homepage';
import BookingPage from 'pages/BookingPage';
import ConfirmedBooking from 'pages/ConfirmedBooking';
import { BookingDetailContextProvider } from 'contexts/BookingDetailContext';
import { occasions } from 'components/BookingForm';
import { fetchAPI } from 'utils/apiMocks';

import './styles.css';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

const updateTimes = (state = [], action) => {
  switch (action.type) {
    case 'reserve': {
      return state.filter((time) => time !== action.time);
    }

    case 'update': {
      return fetchAPI(action.date);
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
          <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </main>
    </BookingDetailContextProvider>
  );
};

export default Main;
