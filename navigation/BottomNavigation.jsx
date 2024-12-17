import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constant';
import { Home, Search, Profile, Cart } from '../screens';

const Tab =  createBottomTabNavigator();


const BottomNavigation = () => {
 
  const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle:{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
    }
  }


  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
              tabBarIcon: ({focused}) => {
                return <
                  Ionicons name={focused ? "home": "home-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                 />
              }
            }}  
          />

          
          <Tab.Screen 
            name='Search' 
            component={Search}
            options={{
              tabBarIcon: ({focused}) => {
                return <
                  Ionicons name={focused ? 'search-sharp': 'search-circle-outline'}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                 />
              }
            }}  
          />



        <Tab.Screen 
          name='Cart' 
          component={Cart}
          options={{
            tabBarIcon: ({focused}) => {
              return <
                Ionicons name={focused ? 'cart': 'cart-outline'}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray}
               />
            }
          }}  
        />


          <Tab.Screen 
            name='Profile' 
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => {
                return <
                  Ionicons name={focused ? 'person': 'person-outline'}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray}
                 />
              }
            }}  
          />
    </Tab.Navigator>
  )
}

export default BottomNavigation


