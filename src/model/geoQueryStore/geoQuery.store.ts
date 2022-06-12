// MobX implementation

import { makeAutoObservable } from 'mobx';
import {
  GeoPointWithHash,
  ObjectWithGeoPoint
} from '../../api/geoquery/common/definitions';

// make this generic soon
// 'export' is added for test purposes
export class GeoStore {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public docs: ObjectWithGeoPoint[] = [];

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
  }

  // add methods here if needed

  /**
   * @function empty() empties the array first before reendering
   */
  public empty(): void {
    this.docs = [];
  }

  public get geopoints() {
    return this.docs.map(
      (point) => new geopointFactory(point.geopoint, point.id, point.name)
    );
  }
}

// make a store instance and export it
// change name base on the name of the class above
const geoStore = new GeoStore();

/**
 * @exports geoStore
 * import this to any screen and use a dot notation
 * geoStore.dacs // exposes the docs contents
 */
export default geoStore;

class geopointFactory implements ObjectWithGeoPoint {
  constructor(
    public geopoint: GeoPointWithHash,
    public id?: string | undefined,
    public name?: string | undefined
  ) {}
}
