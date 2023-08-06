import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";
import colors from "../styles/colors";

export default function EditCard({ entry, deleteEntry, reviewEntry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calories: {entry.calories}</Text>
      <Text style={styles.text}>Description: {entry.description}</Text>
      <View style={styles.buttonContainer}>
        <PressableButton
          onPressFunction={() => deleteEntry(entry.id)}
          defaultStyle={styles.button}
          pressedStyle={styles.buttonPressed}
        >
          <AntDesign
            name="delete"
            size={24}
            color={colors.onComponentTextColor}
          />
        </PressableButton>
        {entry.isOverLimit && !entry.isReviewed && (
          <PressableButton
            onPressFunction={() => reviewEntry(entry.id)}
            defaultStyle={styles.button}
            pressedStyle={styles.buttonPressed}
          >
            <AntDesign
              name="check"
              size={24}
              color={colors.onComponentTextColor}
            />
          </PressableButton>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.frameColor,
    height: 150,
    borderRadius: 10,
    shadowColor: colors.tabIconColor,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    elevation: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  button: {
    width: "15%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.componentColor,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
  text: {
    fontSize: 14,
    color: colors.textColor,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});
