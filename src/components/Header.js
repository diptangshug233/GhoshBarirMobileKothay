import { View, Text } from "react-native";
import React from "react";
import styles from "../styles/App.style";

const Header = () => {
  return (
    <View style={styles.headerDiv}>
      <Text style={styles.headerSmall}>Welcome to</Text>
      <Text style={styles.headerBig}>Ghosh Barir Mobile Kothay</Text>
    </View>
  );
};

export default Header;
