import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/App.style";
import { icons } from "../constants";
import { useSelector } from "react-redux";

const AdminAvatar = ({ locationsFromDB }) => {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatarBox}>
        <Image source={icons.master} style={styles.avatarImage} />
      </View>

      <View style={styles.deviceNameBox}>
        <Text style={styles.deviceNameTitle}>Central Hub</Text>
      </View>

      <View style={styles.lastModifiedBox}>
        <Text style={styles.lastModifiedTitle}>{"Number of Devices"} / </Text>
        <View style={styles.lastModifiedValueBox}>
          <Text style={styles.lastModifiedValue}>
            {locationsFromDB.length === 0
              ? "No devices"
              : locationsFromDB.length === 1
              ? "1 device"
              : `${locationsFromDB.length} devices`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AdminAvatar;
