import { Pressable } from "react-native";
import React from "react";
import colors from "../styles/colors";

export default function PressableButton({
  children,
  onPressFunction,
  defaultStyle,
  pressedStyle,
}) {
  return (
    <Pressable
      onPress={onPressFunction}
      style={({ pressed }) => [defaultStyle, pressed && pressedStyle]}
      android_ripple={{ color: colors.componentPressedColor }}
    >
      {children}
    </Pressable>
  );
}
