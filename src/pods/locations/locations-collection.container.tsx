import * as React from 'react';
import { useLocationsCollection } from './locations-collection.hook';
import { CharacterCollectionComponent } from './locations-collection.component';

export const LocationsCollectionContainer = () => {
  const { locationsCollection, loadLocationsCollection } = useLocationsCollection();

  React.useEffect(() => {
    loadLocationsCollection();
  }, []);


  return (
    <CharacterCollectionComponent
      locationsCollection={locationsCollection}
    />
  );
};
