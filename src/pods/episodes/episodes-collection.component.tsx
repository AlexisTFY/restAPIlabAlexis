import * as React from 'react';
import { EpisodesEntityVm } from './episodes.vm';
import { EpisodesCard } from './components/episodes-card.component';
import * as classes from './episodes.styles';
import { Link, generatePath } from 'react-router-dom';
import Button from '@material-ui/core/Button';
interface Props {
  episodesCollection: EpisodesEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodesCollection } = props;

  return (
    <>
      <Link to={generatePath("/")} style={{ textDecoration: "none", marginRight: '10px' }}>
        <Button variant="contained" color="primary">
          Lista de Personajes
        </Button>
      </Link>

      <Link to={generatePath("/locations")} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Lista de Localizaciones
        </Button>
      </Link>

    <div className={classes.root}>
      <ul className={classes.list}>
        {episodesCollection.map((episodes) => (
          <li key={episodes.id}>
            <EpisodesCard episodes={ episodes} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
