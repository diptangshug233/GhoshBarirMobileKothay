import { getCurrentPositionAsync } from "expo-location";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { FIREBASE_DB } from "../firebase/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const upsertFirebaseDeviceLocation = async (deviceName) => {
  try {
    let location = await getCurrentPositionAsync({});
    const locationRef = collection(FIREBASE_DB, "MASTER_LOCATION");
    const querySnapshot = await getDocs(
      query(locationRef, where("deviceName", "==", deviceName))
    );

    if (querySnapshot.empty) {
      // No matching document found, add a new record
      await addDoc(locationRef, {
        deviceName: deviceName,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        dateModified: Timestamp.fromDate(new Date()),
      });
    } else {
      // Update the existing record
      const doc = querySnapshot.docs[0];
      await updateDoc(doc.ref, {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        dateModified: Timestamp.fromDate(new Date()),
      });
    }
    console.log("Complete");
    return location;
  } catch (err) {
    console.log(err);
  }
};
const getCurrentDeviceLocationFromFirebase = async (deviceName) => {
  try {
    const locationRef = collection(FIREBASE_DB, "MASTER_LOCATION");
    const querySnapshot = await getDocs(
      query(locationRef, where("deviceName", "==", deviceName))
    );
    const doc = querySnapshot.docs[0];
    console.log("Complete");
    return doc.data();
  } catch (err) {
    console.log(err);
  }
};
const getDeviceLocationsFromFirebase = async () => {
  try {
    const locationRef = collection(FIREBASE_DB, "MASTER_LOCATION");
    const querySnapshot = await getDocs(locationRef);
    const locations = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Complete");
    return locations;
  } catch (err) {
    console.log(err);
  }
};
const updateBackgroundLocation = async (location) => {
  try {
    const locationRef = collection(FIREBASE_DB, "MASTER_LOCATION");
    const deviceName = await AsyncStorage.getItem("deviceName");
    const querySnapshot = await getDocs(
      query(locationRef, where("deviceName", "==", deviceName))
    );
    if (querySnapshot.empty) {
      // No matching document found, add a new record
      await addDoc(locationRef, {
        deviceName: deviceName,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        dateModified: Timestamp.fromDate(new Date()),
      });
    } else {
      // Update the existing record
      const doc = querySnapshot.docs[0];
      await updateDoc(doc.ref, {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        dateModified: Timestamp.fromDate(new Date()),
      });
    }
    console.log(
      "Complete",
      deviceName,
      location.coords.latitude,
      location.coords.longitude
    );
    return location;
  } catch (err) {
    console.log(err);
  }
};
export {
  upsertFirebaseDeviceLocation,
  getCurrentDeviceLocationFromFirebase,
  getDeviceLocationsFromFirebase,
  updateBackgroundLocation,
};
