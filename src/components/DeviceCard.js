import { TouchableOpacity, View, Text, Image, Linking } from "react-native";
import React from "react";
import styles from "../styles/App.style";
import { icons } from "../constants";

const DeviceCard = ({ device }) => {
  return (
    <TouchableOpacity
      style={styles.deviceCardContainer}
      key={device.id}
      onPress={() => {
        Linking.openURL(
          "https://www.google.com/maps/search/?api=1&query=" +
            device.latitude +
            "," +
            device.longitude
        );
      }}
    >
      <TouchableOpacity style={styles.deviceCardLogoContainer}>
        <Image
          source={icons.map}
          resizeMode="contain"
          style={styles.deviceCardlogoImage}
        />
      </TouchableOpacity>

      <View style={styles.deviceCardTextContainer}>
        <Text style={styles.deviceCardName} numberOfLines={1}>
          {device.deviceName}
        </Text>

        <Text style={styles.deviceCardLastModified}>
          {device.dateModified.toDate().toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceCard;
