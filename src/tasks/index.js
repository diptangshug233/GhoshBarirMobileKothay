import { useState, useEffect } from "react";
import * as Task from "./task";
/**
 * A hook that handles location tracking functionality.
 */
export function useLocationTracking() {
  const [isTracking, setIsTracking] = useState(false);

  const startTracking = async () => {
    await Task.startTracking();
    setIsTracking(true);
  };

  const stopTracking = async () => {
    await Task.stopTracking();
    setIsTracking(false);
  };

  const clearTracking = async () => {
    if (isTracking) {
      await stopTracking();
    }
    // await Storage.clearLocations();
  };

  useEffect(() => {
    Task.isTracking().then(setIsTracking);
  }, []);

  return {
    isTracking,
    startTracking,
    stopTracking,
    clearTracking,
  };
}

/**
 * A hook that fetches location data from storage and updates when data changes.
 */
export function useLocationData(interval = 3000) {
  const [locations, setLocations] = useState([]);

  const updateLocations = async () => {
    //   const storedLocations = await Storage.getLocations();
    //   setLocations(storedLocations);
  };

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     await updateLocations();
  //     const timerId = setInterval(updateLocations, interval);
  //     return () => clearInterval(timerId);
  //   };

  //   fetchLocations();
  // }, [interval]);

  return locations;
}
