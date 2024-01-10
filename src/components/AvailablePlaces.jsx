import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response wan not ok");
        }
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
