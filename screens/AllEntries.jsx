import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import EntriesList from "../components/EntriesList";
import colors from "../styles/colors";

export default function AllEntries() {
  return (
    <View style={styles.container}>
      <EntriesList isOverLimitOnly={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});