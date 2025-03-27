import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}

const RootLayout = () => {
  return <>
  <StackLayout />
  </>
};

export default RootLayout;

const styles = StyleSheet.create({});
