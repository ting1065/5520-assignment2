import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import EditCard from '../components/EditCard'
import colors from '../styles/colors'
import { deleteFromDB } from '../Firebase/firestore-helper'


export default function EditEntry({ route, navigation }) {

  async function deleteEntry(entryID) {
    await deleteFromDB(entryID);
    navigation.goBack();
  }

  function reviewEntry(entryID) {
    console.log("review entry, ID: ", entryID)
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <EditCard entry={route.params.pressedEntry} deleteEntry={deleteEntry} reviewEntry={reviewEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 50,
    paddingHorizontal: 50,
    backgroundColor: colors.backgroundColor,
    alignItems: "star",
    justifyContent: "center"
  },
});