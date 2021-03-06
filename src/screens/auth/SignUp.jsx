import React from 'react';
import { View, VStack, Input, Button } from 'native-base';

const SignUp = (props) => {
  return (
    <View flex="1" p="4">
      <VStack flex="1" w="full" space="2">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button onPress={() => props.navigation.goBack()}>
          Sign up
        </Button>
      </VStack>
    </View>
  );
};

export default SignUp;
