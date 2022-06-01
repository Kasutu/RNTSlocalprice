import React from 'react';
import type { ReactNode } from 'react';
import { Center, NativeBaseProvider, Text } from 'native-base';
import { ScreensInProgress } from './src/controller/screensInProgress';

export default function AppDevMode(): ReactNode {
  return (
    <NativeBaseProvider>
      <Center opacity={50} bg={'warning.500'} w={'full'} position={'absolute'}>
        <Text fontSize={'10px'} fontWeight={'bold'}>
          DEVELOPMENT MODE
        </Text>
      </Center>
      <ScreensInProgress />
    </NativeBaseProvider>
  );
}