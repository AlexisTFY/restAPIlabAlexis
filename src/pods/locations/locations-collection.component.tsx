import * as React from 'react';
import { LocationsEntityVm } from './locations.vm';
import { LocationsCard } from './components/locations-card.component';
import * as classes from './locations.styles';
import { Link, generatePath } from 'react-router-dom';
import Button from '@material-ui/core/Button';
interface Props {
  locationsCollection: LocationsEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { locationsCollection } = props;

  return (
    <>
    <Link to={generatePath("/")} style={{ textDecoration: "none", marginRight: '10px' }}>
        <Button variant="contained" color="primary">
          Lista de Personajes
        </Button>
      </Link>

      <Link to={generatePath("/episodes")} style={{ textDecoration: "none", marginRight: '10px' }}>
        <Button variant="contained" color="primary">
          Lista de Episodios
        </Button>
      </Link>

      <div className={classes.root}>
        <ul className={classes.list}>
          {locationsCollection.map((locations) => (
            <li key={locations.id}>
              <LocationsCard locations={ locations } />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
