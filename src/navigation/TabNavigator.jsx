import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Books from '../screens/Books';
import Read from '../screens/Read';
import Reading from '../screens/Reading';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Books"
        component={Books}
        options={{
          tabBarBadge: 10,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookshelf"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reading"
        component={Reading}
        options={{
          tabBarBadge: 10,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Read"
        component={Read}
        options={{
          tabBarBadge: 10,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-check"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
