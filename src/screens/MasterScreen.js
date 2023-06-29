import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import styles from "../styles/App.style";
import { icons } from "../constants";
import { AdminAvatar, DeviceCard } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeviceName,
  setFormScreen,
  setLocationsFromDB,
  setMasterView,
} from "../store/store";
import { getDeviceLocationsFromFirebase } from "../utils";

const MasterScreen = () => {
  const dispatch = useDispatch();
  const locationsFromDB = useSelector(
    (state) => state.appState.locationsFromDB
  );
  useEffect(() => {
    (async () => {
      const locations = await getDeviceLocationsFromFirebase();
      dispatch(setLocationsFromDB(locations));
    })();
  }, []);
  const handleRefresh = async () => {
    (async () => {
      const locations = await getDeviceLocationsFromFirebase();
      dispatch(setLocationsFromDB(locations));
    })();
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.userViewContainer}>
        <View>
          <AdminAvatar locationsFromDB={locationsFromDB} />
          <View style={styles.deviceListContainer}>
            <View style={styles.deviceListHeader}>
              <Text style={styles.deviceListHeaderTitle}>My Devices...</Text>
              <TouchableOpacity>
                <Text
                  style={styles.deviceListHeaderBtn}
                  onPress={handleRefresh}
                  onLongPress={resetSession}
                >
                  Refresh
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.deviceCardsContainer}>
              {locationsFromDB.map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MasterScreen;
