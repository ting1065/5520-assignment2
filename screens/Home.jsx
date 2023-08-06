import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PressableButton from "../components/PressableButton";
import colors from "../styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AllEntries from "./AllEntries";
import OverLimitEntries from "./OverLimitEntries";

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        //eliminate the blank bar at the bottom of the screen
        tabBarBackground: () => {
          return <View style={styles.tabBarBackground} />;
        },

        //set the icons on the tab bar
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "All Entries") {
            iconName = "cup-water";
          } else if (route.name === "Over-limit Entries") {
            iconName = "exclamation-thick";
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={24}
              color={
                focused ? colors.tabIconSelectedColor : colors.tabIconColor
              }
            />
          );
        },

        //set the labels on the tab bar
        tabBarLabel: ({ focused }) => {
          const labelName = route.name;
          return (
            <Text
              style={[
                {
                  color: focused
                    ? colors.tabIconSelectedColor
                    : colors.tabIconColor,
                },
                styles.tabLabel,
              ]}
            >
              {labelName}
            </Text>
          );
        },

        headerTitleAlign: "center",
        headerStyle: { backgroundColor: colors.componentColor },
        headerTintColor: colors.onComponentTextColor,
        tabBarActiveBackgroundColor: colors.componentColor,
        tabBarInactiveBackgroundColor: colors.componentColor,

        //"+"button on the right of the header
        headerRight: () => {
          return (
            <PressableButton
              onPressFunction={() => navigation.navigate("Add An Entry")}
              defaultStyle={styles.addButton}
              pressedStyle={styles.addButtonPressed}
            >
              <AntDesign
                name="plus"
                size={24}
                color={colors.onComponentTextColor}
              />
            </PressableButton>
          );
        },
      })}
    >
      <Tab.Screen name="All Entries" component={AllEntries} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginRight: 10,
  },
  addButtonPressed: {
    backgroundColor: colors.componentPressedColor,
  },
  tabBarBackground: {
    height: "100%",
    backgroundColor: colors.componentColor,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
