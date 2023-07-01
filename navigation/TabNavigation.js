import AccountScreen from "../screens/AccountScreen";
import HomeScreen from "../screens/HomeScreen";
import TicketsScreen from "../screens/TicketsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="TabHome">
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
