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
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
            headerStyle: {
              backgroundColor: "#1A2232",
            },
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
