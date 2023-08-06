import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../styles/colors";

export default function InputUnit({
  content,
  setContent,
  inputHeight,
  desription,
}) {
  return (
    <View style={[styles.container, { height: inputHeight }]}>
      <Text style={styles.desription}>{desription}</Text>
      <TextInput
        style={[styles.input, { height: inputHeight }]}
        value={content}
        onChangeText={(currentContent) => setContent(currentContent)}
        multiline={inputHeight > 25 ? true : false}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  desription: {
    fontSize: 14,
    color: colors.textColor,
    width: "25%",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: colors.frameColor,
    borderRadius: 5,
    width: "75%",
    color: colors.textColor,
    textAlignVertical: "top",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
  },
});
