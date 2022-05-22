import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Actual from "./src/Actual";
import Controls from "./src/Controls";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Actual />
        <Controls />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#081c15",
    alignItems: "center",
    justifyContent: "center",
  },
});
