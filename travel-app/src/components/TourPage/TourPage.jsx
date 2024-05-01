import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../allcss/tourpage.css'

const TourPage = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/toursData/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((data) => {
        setTour(data);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, [id]);

  if (!tour) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="tour-container">
      <h2 className="tour-title">{tour.name}</h2>
      <p className="tour-description">{tour.description}</p>
  </div>
  );
};

export default TourPage;