import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Login from '../screens/LogIn';
import TaskDetails from '../screens/Tasks/TaskDetails';
import {StatusBar} from 'react-native';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
