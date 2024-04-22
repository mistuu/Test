/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import BottomScreen from './App/BtmScreen';


const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomScreen">
        
       <Stack.Screen
          name="BottomScreen"
          component={BottomScreen}
          options={{
            headerShown: false,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
