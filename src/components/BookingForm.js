import React, { useState } from 'react';

const BookingForm = ({ showName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = () => {
    console.log('Booking:', { showName, name, email });
  };

  return (
    <div>
      <h2>Book Tickets for {showName}</h2>
      <form>
        <label>
          Your Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Your Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleBooking}>Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
