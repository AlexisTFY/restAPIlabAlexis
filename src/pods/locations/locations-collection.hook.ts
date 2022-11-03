import * as React from 'react';
import { LocationsEntityVm } from './locations.vm';
import { getLocations } from './api';
import { mapFromApiToVm } from './locations.mappers';
import { mapToCollection } from 'common/mappers';

export const useLocationsCollection = () => {
  const [locationsCollection, setLocationsCollection] = React.useState<LocationsEntityVm[]>(
    []
  );

  const loadLocationsCollection = () => {
    getLocations().then((locations) => {
      console.log('resilt', locations);
      setLocationsCollection(mapToCollection(locations.results, mapFromApiToVm))
    }
    
    );
  };

  React.useEffect(() => {
    loadLocationsCollection();
  }, []);

  return { locationsCollection, loadLocationsCollection };
};
