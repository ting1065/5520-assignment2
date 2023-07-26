import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'
import colors from '../styles/colors'

export default function OverLimitEntries() {
  return (
    <SafeAreaView style={styles.container} >
        <EntriesList isOverLimitOnly={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: colors.backgroundColor,
  },
});