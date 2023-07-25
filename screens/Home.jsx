import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entries from './Entries'

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllEntries" component={Entries} />
      <Tab.Screen name="OverLimitEntries" component={Entries} />
    </Tab.Navigator>
  )
}