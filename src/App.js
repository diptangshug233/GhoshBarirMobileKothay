import { View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Header, Loader } from "./components";
import { FormScreen, MasterScreen, UserScreen } from "./screens";
import styles from "./styles/App.style";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import { useSelector } from "react-redux";

export default function App() {
  let [fontsLoaded] = useFonts({
    DMRegular: DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMMedium: DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMBold: DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  const formScreen = useSelector((state) => state.appState.formScreen);
  const errorMessage = useSelector((state) => state.appState.errorMsg);
  const masterView = useSelector((state) => state.appState.masterView);

  if (!fontsLoaded || errorMessage !== null) {
    return <Loader />;
  } else {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerDiv}>
            <Header />
            {formScreen ? (
              <FormScreen />
            ) : (
              <>{!masterView ? <UserScreen /> : <MasterScreen />}</>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
