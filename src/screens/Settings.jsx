import React from 'react';
import { View, VStack, Button } from 'native-base';

const Settings = (props) => {
  return (
    <View flex="1" p="4">
      <VStack w="full" space="4">
        <Button
          variant="outline"
          colorScheme="danger"
          onPress={() => props.navigation.navigate('Auth')}
        >
          Log out
        </Button>
      </VStack>
    </View>
  );
};

export default Settings;
