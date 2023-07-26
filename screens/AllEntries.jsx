import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import EntriesList from "../components/EntriesList";
import colors from "../styles/colors";

export default function AllEntries() {
  return (
    <SafeAreaView style={styles.container}>
    <EntriesList isOverLimitOnly={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: colors.backgroundColor,
  },
});