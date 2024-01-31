import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './ShowDetails.css'; 

const ShowDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const storedShow = localStorage.getItem(`show_${id}`);
    if (storedShow) {
      setShow(JSON.parse(storedShow));
    } else {
      axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
          setShow(response.data);
          localStorage.setItem(`show_${id}`, JSON.stringify(response.data));
        })
        .catch(error => console.error(error));
    }
  }, [id]);

  return (
    <div className="show-details-container">
      {show && (
        <div>
          
          <div className="show-info">
            <img
              src={show.image ? show.image.medium : 'placeholder-image-url'}
              alt={show.name}
              className="show-image"
            />
            <div className="show-description">
              <p className="show-summary">{show.summary}</p>
              <Link to={`/summary/${id}`} className="summary-link">
                <button className="summary-button">Book Ticket</button>
              </Link>
            </div>
          </div>
          <h1 className="show-title">{show.name}</h1>
        </div>
      )}
    </div>
  );
}

export default ShowDetails;
