import React from 'react';
import { registerRootComponent } from 'expo';
import HomeScreen from './Screens/home';
import SearchScreen from './Screens/search';
import MenuScreen from './Screens/menu';
import ProfileScreen from './Screens/profile';
import CartScreen from './Screens/cart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Icon } from 'react-native-elements';



const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
        
          <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#30D5C8',
        inactiveTintColor: 'gray',
         style: {
        backgroundColor: 'black',
    },
      }}
    >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="home" color={"gray"} activeTintColor= {'#30D5C8'}/>
                )}}/>
                <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="search" color={"gray"} activeTintColor= {'#30D5C8'}/>
                )}}/>
            <Tab.Screen
              name="Menu"
              component={MenuScreen}
              options={{
                tabBarLabel: 'Menu',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="menu" color={"gray"} activeTintColor= {'#30D5C8'}/>
                )}}/>
           <Tab.Screen
              name="Cart"
              component={CartScreen}
              options={{
                tabBarLabel: 'cart',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="shopping-cart" color={"gray"} activeTintColor= {'#30D5C8'}/>
                )}}/>
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="person" color={"gray"} activeTintColor= {'#30D5C8'}/>
                )}}/>
        </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
registerRootComponent(App);