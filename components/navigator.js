import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/home';
import SearchScreen from '../Screens/search';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
