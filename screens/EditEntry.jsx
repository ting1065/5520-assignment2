import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import EditCard from '../components/EditCard'
import colors from '../styles/colors'
import { deleteFromDB, markReviewedFromDB } from '../Firebase/firestore-helper'


export default function EditEntry({ route, navigation }) {

  async function deleteEntry(entryID) {

    Alert.alert("Delete", "Are you sure you want to delete this?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: async () => {
          await deleteFromDB(entryID);
          navigation.goBack();
        },
      },
    ]
    );

  }

  function reviewEntry(entryID) {

    Alert.alert("Important", "Are you sure you want to mark this item as reviewed?", [
      {
        text: "No",
      },
      {
        text: "Yes",
        onPress: async () => {
          markReviewedFromDB(entryID);
          navigation.goBack();
        },
      },
    ]
    );

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