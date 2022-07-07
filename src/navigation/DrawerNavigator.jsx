import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Center, Text, Icon } from 'native-base';
import TabNavigator from './TabNavigator';
import Settings from '../screens/Settings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <Center bg="coolGray.800" p="6">
            <Icon
              as={FontAwesome5}
              name="book-reader"
              color="emerald.600"
              size="120"
              mb="2"
            />
            <Text fontSize="4xl" fontWeight="thin" color="white">
              Book Worm
            </Text>
          </Center>
          <DrawerItem
            label="Library"
            icon={({size, color}) => (
              <MaterialCommunityIcons name="bookshelf" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Library')}
          />
          <DrawerItem
            label="Settings"
            icon={({size, color}) => (
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            )}
            onPress={() => props.navigation.navigate('Settings')}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name="Library" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
