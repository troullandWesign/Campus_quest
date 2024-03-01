import { useEffect, useState } from 'react';

const MyComponent = ({ latitude, longitude }) => {
  const initialPosition = { latitude , longitude };
 
  const [locationData, setLocationData] = useState(initialPosition);
  const [distance, setDistance] = useState(0);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Rayon de la Terre en kilomètres
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance en kilomètres
    return distance;
  };

  const toRad = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const updateLocation = (position) => {
    const { latitude, longitude } = position.coords;
    const newLocationData = { latitude, longitude };
    setLocationData(newLocationData);
    const newDistance = calculateDistance(
      initialPosition.latitude,
      initialPosition.longitude,
      newLocationData.latitude,
      newLocationData.longitude
    );
    setDistance(newDistance);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        updateLocation,
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
    <div className='description'>
      <p>
        Distance par rapport à la position initiale :{' '}
        {distance < 1
          ? `${(distance * 1000).toFixed(2)} mètres`
          : `${distance.toFixed(2)} kilomètres`}
      </p>
      {/* Le reste de votre composant */}
    </div>
  );
};

export default MyComponent;
