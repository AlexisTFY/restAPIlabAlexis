import * as React from 'react';
import { useLocationsCollection } from './locations-collection.hook';
import { CharacterCollectionComponent } from './locations-collection.component';

export const LocationsCollectionContainer = () => {
  const { locationsCollection, loadLocationsCollection } = useLocationsCollection();

  console.log('locationsCollection', locationsCollection);

  React.useEffect(() => {
    loadLocationsCollection();
  }, []);


  return (
    <CharacterCollectionComponent
      locationsCollection={locationsCollection}
    />
  );
};
