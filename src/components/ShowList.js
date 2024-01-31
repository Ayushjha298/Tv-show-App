import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ShowList.css';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="show-list-container">
      <h1 className="show-list-title">Explore Shows</h1>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.show.id} className="show-item">
            <Link to={`/details/${show.show.id}`} className="show-link">
              <img
                src={show.show.image ? show.show.image.medium : 'placeholder-image-url'}
                alt={show.show.name}
                className="show-image"
              />
              <div className="show-details">
                <h3 className="show-name">{show.show.name}</h3>

              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowList;
