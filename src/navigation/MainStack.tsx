import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';

import TaskDetails from '../screens/Tasks/TaskDetails';
import SignUp from '../screens/Auth/SignUp';
import Login from '../screens/Auth/LogIn';

const Stack = createStackNavigator();


const MainStack = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  console.log('isAuthenticated', isAuthenticated)
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Home' : 'Login'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
