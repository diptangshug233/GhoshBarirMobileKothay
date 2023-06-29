import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";
import { updateBackgroundLocation } from "../utils";

/**
 * The unique name of the background location task.
 */
export const locationTaskName = "location-update-task";

/**
 * Check if the background location is started and running.
 * This is a wrapper around `Location.hasStartedLocationUpdatesAsync` with the task name prefilled.
 */
export async function isTracking() {
  return await Location.hasStartedLocationUpdatesAsync(locationTaskName);
}

/**
 * Start the background location monitoring and add new locations to the storage.
 * This is a wrapper around `Location.startLocationUpdatesAsync` with the task name prefilled.
 */
export async function startTracking() {
  await Location.startLocationUpdatesAsync(locationTaskName, {
    accuracy: Location.Accuracy.BestForNavigation,
    timeInterval: 15 * 1000,
    foregroundService: {
      notificationTitle: "GBMK is active",
      notificationBody: "Monitoring your location...",
      notificationColor: "#B3AEC6",
      killServiceOnDestroy: false,
    },
    activityType: Location.ActivityType.Fitness,
    showsBackgroundLocationIndicator: true,
  });
  console.log("[tracking]", "started background location task");
}

/**
 * Stop the background location monitoring.
 * This is a wrapper around `Location.stopLocationUpdatesAsync` with the task name prefilled.
 */
export async function stopTracking() {
  await Location.stopLocationUpdatesAsync(locationTaskName);
  console.log("[tracking]", "stopped background location task");
}

/**
 * Define the background task that's adding locations to the storage.
 * This method isn't "directly" connected to React, that's why we store the data locally.
 */
TaskManager.defineTask(locationTaskName, async ({ error, data }) => {
  if (error) {
    return console.error(
      "[tracking]",
      "Something went wrong within the background location task...",
      error
    );
  }

  const location = data.locations;
  console.log("[tracking]", "Received new locations", location);

  try {
    await updateBackgroundLocation(location[0]);
    console.log("[tracking]", "Working as expected");
  } catch (error) {
    console.log(
      "[tracking]",
      "Something went wrong when saving a new location...",
      error
    );
  }
});
