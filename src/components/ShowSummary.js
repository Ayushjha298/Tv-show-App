import React from 'react';
import { useParams } from 'react-router-dom';
import './ShowSummary.css'; 

const ShowSummary = () => {
  const { id } = useParams();

  const storedShow = localStorage.getItem(`show_${id}`);
  const show = storedShow ? JSON.parse(storedShow) : null;

  return (
    <div className="show-summary-container">
      {show && (
        <div>
          <h1 className="show-summary-title">{show.name} Summary</h1>
          <div className="show-summary-content">
            <p className="show-summary">{show.summary}</p>
            <form className="booking-form">
              <h2>Book Movie Ticket</h2>
              <label htmlFor="movieName">Movie Name:</label>
              <input
                type="text"
                id="movieName"
                name="movieName"
                value={show.name}
                readOnly
                className="movie-input"
              />
              <label htmlFor="userName">Your Name:</label>
              <input type="text" id="userName" name="userName" className="user-input" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="user-input" />
              <button type="submit" className="book-button">Book Now</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowSummary;
