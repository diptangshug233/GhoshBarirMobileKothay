import { View, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/App.style";
import { icons } from "../constants";
import { useDispatch } from "react-redux";
import {
  setDeviceName,
  setErrorMsg,
  setFormScreen,
  setLocation,
  setMasterView,
} from "../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForegroundPermissions } from "expo-location";
import { upsertFirebaseDeviceLocation } from "../utils";

const FormScreen = () => {
  const [permission, askPermission] = useForegroundPermissions();
  const [formDeviceName, setFormDeviceName] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    getDataFromAsyncStorage();
  }, []);
  const getDataFromAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("deviceName");
      if (value !== null) {
        dispatch(setDeviceName(value));
        console.log("Value stored in database: ", value);
        dispatch(setFormScreen(false));
      } else {
        console.log("Value is not stored in the database");
        dispatch(setFormScreen(true));
      }
    } catch (err) {
      dispatch(setErrorMsg(err));
    }
  };
  const handleDeviceNameSubmit = async () => {
    if (formDeviceName.toUpperCase() === "ADMIN") {
      dispatch(setFormScreen(false));
      dispatch(setMasterView(true));
    } else if (formDeviceName) {
      try {
        if (!permission.granted) {
          askPermission();
        }
        if (permission.granted) {
          await AsyncStorage.setItem("deviceName", formDeviceName);
          const currentLocation = await upsertFirebaseDeviceLocation(
            formDeviceName
          );
          dispatch(setFormScreen(false));
          dispatch(setDeviceName(formDeviceName));
          dispatch(setLocation(currentLocation));
        }
      } catch (err) {
        dispatch(setErrorMsg(err));
      }
    }
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.formInput}
          value={formDeviceName}
          onChangeText={setFormDeviceName}
          placeholder="Enter your device name..."
        />
      </View>
      <TouchableOpacity style={styles.formBtn} onPress={handleDeviceNameSubmit}>
        <Image
          source={icons.next}
          resizeMode="contain"
          style={styles.formBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
