import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import EntriesList from '../components/EntriesList'
import colors from '../styles/colors'

export default function OverLimitEntries({navigation}) {
  return (
    <View style={styles.container} >
      <EntriesList isOverLimitOnly={true} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});