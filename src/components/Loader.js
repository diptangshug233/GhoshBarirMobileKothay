import { View, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";
import styles from "../styles/App.style";

const Loader = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.activityIndicatorDiv}>
        <ActivityIndicator size="large" color="#FE7654" />
      </View>
    </SafeAreaView>
  );
};

export default Loader;
