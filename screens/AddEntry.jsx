import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputUnit from "../components/InputUnit";

export default function AddEntry() {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <InputUnit
        content={calories}
        setContent={setCalories}
        desription="Calories"
        inputHeight={25}
      />
      <InputUnit
        content={description}
        setContent={setDescription}
        desription="Description"
        inputHeight={100}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
