import geopointStore from '../model/geopointStore/geopointStore';
import mapCoordsStore from '../model/mapCoordsStore/mapCoordsStore';
import React, { useState } from 'react';
import Textrenedere from '../../test/textrenedere';
import { Box, Button, Input, VStack } from 'native-base';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';
import { ReactNativeGeofire } from '../api/geoquery/geoquery';
import { uuid } from '../api/uuid/index.uuid';

const shopsGeoFire = new ReactNativeGeofire('shops');

export default function GeoqueryDebug() {
  const [text, setText] = useState<string>('');

  return (
    <>
      <Box safeArea width={'full'} height={'full'}>
        <MapViewComponent />

        <VStack justifyContent={'center'} space={5}>
          <Button
            // custom geofire implementation
            onPress={() =>
              shopsGeoFire.query(
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude,
                50
              )
            }
          >
            {'Search nearby (30Km)'}
          </Button>
          <Button
            // custom geofire implementation
            onPress={() => {
              setText('');
              shopsGeoFire.add(
                { name: text, id: uuid.v4() },
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude
              );
            }}
          >
            Add Location
          </Button>
          <Button
            // custom geofire implementation
            // geo point should go to the user
            onPress={() => {
              console.log(geopointStore.recentGeopoint);

              shopsGeoFire.update(
                geopointStore.recentGeopoint.geohash,
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude
              );
            }}
          >
            Update Geopoint
          </Button>
          <Input value={text} onChangeText={(val) => setText(val)} />
        </VStack>

        <Textrenedere />
      </Box>
    </>
  );
}
