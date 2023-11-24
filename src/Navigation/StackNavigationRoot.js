import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movie } from '../Screens';

const Stack = createStackNavigator();

const StackNavigationRoot = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Movie' component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigationRoot