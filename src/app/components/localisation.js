import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [locationData, setLocationData] = useState(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocationData = { latitude, longitude };
          setLocationData(newLocationData);
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas prise en charge par ce navigateur.");
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      {locationData ? (
        <div>
          <p>Latitude: {locationData.latitude}</p>
          <p>Longitude: {locationData.longitude}</p>
          {/* Utilisez les données de localisation comme vous le souhaitez */}
        </div>
      ) : (
        <p>En attente de données de localisation...</p>
      )}
      {/* Le reste de votre composant */}
    </div>
  );
};

export default MyComponent;
