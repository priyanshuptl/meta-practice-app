import { useContext } from 'react';

import BookingDetailContext from 'contexts/BookingDetailContext';
import { submitAPI } from 'utils/apiMocks';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export const occasions = ['birthday', 'anniversary'];

const BookingForm = () => {
  const {
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
  } = useContext(BookingDetailContext);
  const navigate = useNavigate();

  const dateChangeHandler = (e) => {
    const { value } = e.target;
    dispatch({ type: 'update', date: new Date(value) });
    setDate(value);
  };

  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };

  const guestsChangeHandler = (e) => {
    setGuests(e.target.value);
  };

  const occasionChangeHandler = (e) => {
    setOccasion(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    submitAPI({
      date,
      time,
      guests,
      occasion,
    }).then((res) => {
      if (res) {
        dispatch({ type: 'reserve', time });
        setTime('');

        navigate('/confirmed-booking');
      }
    });
  };

  return (
    <form className='booking-form grid' onSubmit={submitFormHandler}>
      <div className='form-group date'>
        <label htmlFor='res-date'>Choose date</label>
        <input
          type='date'
          id='res-date'
          value={date}
          onChange={dateChangeHandler}
          required
        />
      </div>
      <div className='form-group time'>
        <label htmlFor='res-time'>Choose time</label>
        <select
          id='res-time'
          value={time}
          onChange={timeChangeHandler}
          required>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group guests'>
        <label htmlFor='guests'>Number of guests</label>
        <input
          type='number'
          placeholder='1'
          min='1'
          max='10'
          id='guests'
          value={guests}
          onChange={guestsChangeHandler}
          required
        />
      </div>
      <div className='form-group occasion'>
        <label htmlFor='occasion'>Occasion</label>
        <select
          id='occasion'
          value={occasion}
          onChange={occasionChangeHandler}
          required>
          {occasions.map((occ) => (
            <option key={occ} value={occ}>
              {occ}
            </option>
          ))}
        </select>
      </div>
      <button className='primary-button' type='submit' aria-label='On Click'>
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
