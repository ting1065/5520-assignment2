import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Entries({ navigation }) {
  return (
    <View>
      <Text>Entries</Text>
      <Button title="edit" onPress={() => navigation.navigate("Edit") } />
      <Button title="add" onPress={() => navigation.navigate("Add") } />
    </View>
  )
}