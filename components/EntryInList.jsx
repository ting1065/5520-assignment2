import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../styles/colors";

export default function EntryInList({ editEntry, entry}) {
  function pressHandler() {
    editEntry(entry);
  }

  return (
    <PressableButton
      onPressFunction={()=>pressHandler()}
      defaultStyle={styles.button}
      pressedStyle={styles.buttonPressed}
    >
      <Text style={styles.description}>{entry.description}</Text>
      <View style={styles.rightContainer}>
        {entry.isOverLimit && !entry.isReviewed && (
          <FontAwesome
            name="exclamation-triangle"
            size={20}
            color={colors.alertSignColor}
          />
        )}
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloryNumber}>{entry.calories}</Text>
        </View>
      </View>
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.componentColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: 37,
    alignSelf: "center",
    marginVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
  description: {
    fontSize: 18,
    textAlign: "left",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: colors.onComponentTextColor,
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  caloriesContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.onComponentTextColor,
    width: 40,
    height: 24,
    borderRadius: 4,
    marginLeft: 10,
  },
  caloryNumber: {
    textAlign: "center",
    color: colors.textColor,
    fontWeight: "bold",
  },
});
