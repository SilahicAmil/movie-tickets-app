import HomeScreen from "./screens/HomeScreen";
import MoviesDetailsScreen from "./screens/MoviesDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabHome">
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{
            title: "Omniplex",
          }}
        />
        <Stack.Screen
          name="MoviesDetailsScreen"
          component={MoviesDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
