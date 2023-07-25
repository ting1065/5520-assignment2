import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entries from "./Entries";
import PressableButton from "../components/PressableButton";
import colors from "../styles/colors";
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <PressableButton
              onPressFunction={() => navigation.navigate("Add")}
              defaultStyle={styles.addButton}
              pressedStyle={styles.addButtonPressed}
            >
              <AntDesign name="plus" size={24} color={colors.onComponentTextColor} />
            </PressableButton>
          );
        },
      }}
    >
      <Tab.Screen name="AllEntries" component={Entries} />
      <Tab.Screen name="OverLimitEntries" component={Entries} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    addButton: {
      backgroundColor: colors.componentColor,
    },
    addButtonPressed: {
      backgroundColor: colors.componentPressedColor,
    },
  });
