import { render, screen } from '@testing-library/react';

import BookingForm from '.';
import { BookingDetailContextProvider } from 'contexts/BookingDetailContext';
import { initializeTimes } from 'components/Main';
import { fetchAPI } from 'utils/apiMocks';

test('Renders the BookingForm heading', () => {
  render(
    <BookingDetailContextProvider
      value={{
        availableTimes: ['17:00'],
      }}>
      <BookingForm />
    </BookingDetailContextProvider>
  );
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes should return correct expected value', () => {
  const initialState = initializeTimes();
  const expectedResult = fetchAPI(new Date());
  expect(initialState).toEqual(expectedResult);
});
