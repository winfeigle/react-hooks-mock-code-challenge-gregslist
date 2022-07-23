import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {
  const {id, description, image, location} = listing;
  const [ favoriteButton, setFavoriteButton ] = useState(false);

  const handleFavoriteClick = () => {
    setFavoriteButton(!favoriteButton);
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onDeleteListing(id))
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description}/>
      </div>
      <div className="details">
        {favoriteButton ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
