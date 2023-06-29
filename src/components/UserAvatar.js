import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles/App.style";
import { icons } from "../constants";

const UserAvatar = ({ deviceName, currentDeviceData }) => {
  const lastModified = currentDeviceData
    ? currentDeviceData.dateModified
    : null;

  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatarBox}>
        <Image source={icons.avatar} style={styles.avatarImage} />
      </View>

      <View style={styles.deviceNameBox}>
        <Text style={styles.deviceNameTitle}>{deviceName}</Text>
      </View>

      {lastModified && (
        <View style={styles.lastModifiedBox}>
          <Text style={styles.lastModifiedTitle}>{"Last updated"} / </Text>
          <View style={styles.lastModifiedValueBox}>
            <Text style={styles.lastModifiedValue}>
              {lastModified.toDate().toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default UserAvatar;
