import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'
import colors from '../styles/colors'

export default function OverLimitEntries() {
  return (
    <View style={styles.container} >
      <EntriesList isOverLimitOnly={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});