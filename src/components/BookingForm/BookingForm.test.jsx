import { render, screen } from '@testing-library/react';

import BookingForm from '.';
import { BookingDetailContextProvider } from 'contexts/BookingDetailContext';

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
