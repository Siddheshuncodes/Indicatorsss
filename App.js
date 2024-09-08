import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import CourseListScreen from './screens/CourseListScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import AboutScreen from './screens/AboutScreen'
import { AboutStack } from './AppStack'

const Tab = createBottomTabNavigator()

// https://ionic.io/ionicons/v4
// For complete list of ionic icons 

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          tabBarShowLabel: true, //its true by default
          tabBarActiveTintColor: 'green',
        }

        }
      >
        <Tab.Screen 
        name="Indica8or" 
        component={CourseListScreen} 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (<Ionicons name="home" size={20} color={color}/>
          ),
        }}
        />

        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (<Ionicons name="cog" size={20} color={color}/>
          ),
        }}
        />

        <Tab.Screen name="About Stack" component={AboutStack} 
          options={{
            headerShown: false, // Uncomment to see the change. This will hide the header of the stack navigator. 
            tabBarIcon: ({ color }) => (<Ionicons name="information-circle" size={20} color={color}></Ionicons>)
          }}
        />

        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (<Ionicons name="person" size={20} color={color}/>
          ),
          tabBarBadge: 3,
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}