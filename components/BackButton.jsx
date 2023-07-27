import { Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../styles/colors";
import PressableButton from "./PressableButton";

export default function BackButton({ onPress }) {
  return (
    <PressableButton
      defaultStyle={styles.container}
      pressedStyle={styles.containerPressed}
      onPressFunction={() => onPress()}
    >
      <FontAwesome5
        name="chevron-left"
        size={18}
        color={colors.onComponentTextColor}
      />
      <Text style={styles.text}>Back</Text>
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerPressed: {
    backgroundColor: colors.componentPressedColor,
  },
  text: {
    marginLeft: 5,
    fontSize: 17,
    color: colors.onComponentTextColor,
    textAlign: "center",
  },
});
