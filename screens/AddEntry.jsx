import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import InputUnit from "../components/InputUnit";
import PressableButton from "../components/PressableButton";
import colors from "../styles/colors";
import { addToDB } from "../Firebase/firestore-helper";

export default function AddEntry({ navigation }) {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");
  const [caloryThreshold, setCaloryThreshold] = useState(500);

  function resetInput() {
    setCalories("");
    setDescription("");
  }

  async function submit() {

    if (
      !calories ||
      isNaN(calories) ||
      parseInt(calories) <= 0 ||
      !description
    ) {
      Alert.alert("Invalid input", "Please check your input values");
      return;
    }

    const caloriesInt = parseInt(calories);
    const isOverLimit = caloriesInt > caloryThreshold;
    const newEntry = {calories: caloriesInt, description: description, isOverLimit: isOverLimit, isReviewed: false};
    await addToDB(newEntry);
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
          <Text style={styles.buttonText} >Reset</Text>
        </PressableButton>
        <PressableButton
          onPressFunction={() => submit()}
          defaultStyle={styles.button}
          pressedStyle={styles.buttonPressed}
        >
          <Text style={styles.buttonText} >submit</Text>
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
    marginTop: 20,
  },
  button: {
    width: "20%",
    height: 25,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.componentColor,
  },
  buttonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: colors.onComponentTextColor,
  },
});
