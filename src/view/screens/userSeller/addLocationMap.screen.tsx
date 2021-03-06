import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import React from 'react';
import { Box, Center, NativeBaseProvider, Text, VStack } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

export function AddLocationMapScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={3} height={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader title="Add location" />

          {/* map placeholder */}
          <Center
            backgroundColor={'indigo.500'}
            height={'80%'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Text color="black" fontSize="20" fontWeight="bold">
              MAP
            </Text>
          </Center>

          {/* cancel and save btn */}
          <Box
            safeAreaBottom
            flex={1}
            marginY={'5'}
            position={'absolute'}
            bottom={'0'}
            flexDirection={'row'}
            justifyContent={'center'}
            width={'100%'}
          >
            <HollowAndSolidButton />
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
