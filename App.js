import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import AddEntry from "./screens/AddEntry";
import EditEntry from "./screens/EditEntry";
import colors from "./styles/colors";
import BackButton from "./components/BackButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: colors.componentColor },
          headerTintColor: colors.onComponentTextColor,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add An Entry"
          component={AddEntry}
          options={({ navigation }) => ({
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Stack.Screen
          name="Edit Entry"
          component={EditEntry}
          options={({ navigation }) => ({
            headerLeft: () => (
              <BackButton onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
