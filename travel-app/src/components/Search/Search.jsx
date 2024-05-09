import React, { useState, useEffect, useRef } from "react";
import "../../allcss/search.css";
import { useNavigate } from "react-router-dom";

const Search = ({ toursData }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);
  const [error, setError] = useState(false);

  let navigate = useNavigate()
  
  const filterTours = () => {
    if (!searchItem) {
      setFilteredTours([]); 
    } else {
      const filtered = toursData.filter((tour) =>
        tour.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredTours(filtered);
      setError(filtered.length === 0);
    }
  };


  useEffect(() => {
    filterTours();
  }, [searchItem, toursData]);


  useEffect(() => {
    const clickOut = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", clickOut);

    return () => {
      document.removeEventListener("click", clickOut);
    };
  }, []);

  const inpFocus = () => {
    setShowDropdown(true);
  };

  const handleTourSelect = (tour) => {
    navigate(`/ItemDescription/${tour.id}`);
  };

  return (
    <div>
      <div className="search-item">
        <img src="../img/search.png" alt="" />
        <input
          type="text"
          placeholder="Поиск туров..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onFocus={inpFocus}
          ref={inputRef}
        />
        {showDropdown && (
          <div className="dropdown-search">
          {
          error
          ? (<div>Результаты поиска отсутсвуют</div>)
          : (filteredTours.map((tour) => (
            <div key={tour.id} onClick={() => handleTourSelect(tour)}>
              {tour.name}
            </div>
          )))
          }
        </div>
        )}
      </div>
    </div>
  );
};


export default Search;