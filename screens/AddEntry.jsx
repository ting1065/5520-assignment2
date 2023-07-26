import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import InputUnit from "../components/InputUnit";
import PressableButton from "../components/PressableButton";
import colors from "../styles/colors";

export default function AddEntry({ navigation }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  function resetInput() {
    setCalories("");
    setDescription("");
  }

  function submit() {
    if (
      !calories ||
      isNaN(calories) ||
      parseInt(calories) <= 0 ||
      !description
    ) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }
    console.log("submitted");
    navigation.goBack();
  }

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
      <View style={styles.buttonContainer}>
        <PressableButton
          onPressFunction={() => resetInput()}
          defaultStyle={styles.button}
          pressedStyle={styles.buttonPressed}
        >
          <Text>Reset</Text>
        </PressableButton>
        <PressableButton
          onPressFunction={() => submit()}
          defaultStyle={styles.button}
          pressedStyle={styles.buttonPressed}
        >
          <Text>submit</Text>
        </PressableButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: colors.componentColor,
  },
  buttonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
});
