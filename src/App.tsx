/**
 * @format
 */

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// navigation
import QuestionScreen from "./screens/QuestionScreen";
import StudentScreen from "./screens/StudentScreen";
import ResultScreen from "./screens/ResultScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionScreen">
        <Stack.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          options={{ title: " " }}
        />
        <Stack.Screen
          name="StudentScreen"
          component={StudentScreen}
          options={{ title: " " }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: " " }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
