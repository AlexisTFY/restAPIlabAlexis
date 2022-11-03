import * as React from 'react';
import { LocationsEntityVm } from './locations.vm';
import { LocationsCard } from './components/locations-card.component';
import * as classes from './locations.styles';

interface Props {
  locationsCollection: LocationsEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationsCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {locationsCollection.map((locations) => (
          <li key={locations.id}>
            <LocationsCard locations={ locations } />
          </li>
        ))}
      </ul>
    </div>
  );
};
