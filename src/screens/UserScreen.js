import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import styles from "../styles/App.style";
import { UserAvatar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentDeviceData,
  setDeviceName,
  setFormScreen,
  setLocation,
  setMasterView,
} from "../store/store";
import { getCurrentPositionAsync } from "expo-location";
import {
  getCurrentDeviceLocationFromFirebase,
  upsertFirebaseDeviceLocation,
} from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocationTracking } from "../tasks";

const UserScreen = () => {
  const tracking = useLocationTracking();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.appState.location);
  const deviceName = useSelector((state) => state.appState.deviceName);
  const currentDeviceData = useSelector(
    (state) => state.appState.currentDeviceData
  );
  useEffect(() => {
    (async () => {
      let currentLocation = await getCurrentPositionAsync({});
      dispatch(setLocation(currentLocation));
      const currentDeviceDataFromFB =
        await getCurrentDeviceLocationFromFirebase(deviceName);
      dispatch(setCurrentDeviceData(currentDeviceDataFromFB));
    })();
  }, []);
  const handleSyncNowSubmit = async () => {
    const currentLocation = await upsertFirebaseDeviceLocation(deviceName);
    dispatch(setLocation(currentLocation));
    const currentDeviceDataFromFB = await getCurrentDeviceLocationFromFirebase(
      deviceName
    );
    dispatch(setCurrentDeviceData(currentDeviceDataFromFB));
    // tracking.startTracking();
  };
  const resetSession = async () => {
    try {
      await AsyncStorage.removeItem("deviceName");
      dispatch(setDeviceName(""));
      dispatch(setFormScreen(true));
      dispatch(setMasterView(false));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      {location && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.userViewContainer}>
            <UserAvatar
              deviceName={deviceName}
              currentDeviceData={currentDeviceData}
            />
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyHeadText}>Your Location...</Text>
              <View style={styles.bodyBox}>
                <Text style={styles.bodyText}>
                  Your current location is (
                  {location.coords.latitude.toFixed(2)},{" "}
                  {location.coords.longitude.toFixed(2)}).
                </Text>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.bodyBtn}
                    onPress={() => {
                      Linking.openURL(
                        "https://www.google.com/maps/search/?api=1&query=" +
                          location.coords.latitude +
                          "," +
                          location.coords.longitude
                      );
                    }}
                  >
                    <Text style={styles.bodyBtnText}>Open in Maps</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.bodyBtn}
                    onPress={handleSyncNowSubmit}
                    onLongPress={resetSession}
                  >
                    <Text style={styles.bodyBtnText}>Sync Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    style={styles.bodyBtn}
                    onPress={
                      tracking.isTracking
                        ? tracking.stopTracking
                        : tracking.startTracking
                    }
                  >
                    <Text style={styles.bodyBtnText}>
                      {tracking.isTracking ? "Stop tracking" : "Start tracking"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default UserScreen;
