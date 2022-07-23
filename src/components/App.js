import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listCards, setListCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setListCards(listings));
  }, []);


  const onDeleteListing = (id) => {
    setListCards(prevListings => {
      const newListings = prevListings.filter(listing => {
        return listing.id !== id;
      })
      return newListings;
    })
  }

  const displayedListings = listCards.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
        listings={displayedListings} 
        onDeleteListing={onDeleteListing} 
        />
    </div>
  );
}

export default App;
