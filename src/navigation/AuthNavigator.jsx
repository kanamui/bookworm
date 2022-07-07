import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Create Account',
        }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
