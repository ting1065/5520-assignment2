import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import PressableButton from '../components/PressableButton'
import colors from '../styles/colors'

export default function Entries({ navigation }) {
  return (
    <View>
      <Text>Entries</Text>

      <PressableButton
        onPressFunction={() => navigation.navigate("Edit")}
        defaultStyle={styles.button}
        pressedStyle={styles.buttonPressed}
      >
        <Text>edit</Text>
      </PressableButton>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.componentColor,
  },
  buttonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
});