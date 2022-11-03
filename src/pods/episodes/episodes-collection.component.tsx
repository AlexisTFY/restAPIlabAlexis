import * as React from 'react';
import { EpisodesEntityVm } from './episodes.vm';
import { EpisodesCard } from './components/episodes-card.component';
import * as classes from './episodes.styles';

interface Props {
  episodesCollection: EpisodesEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { episodesCollection } = props;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {episodesCollection.map((episodes) => (
          <li key={episodes.id}>
            <EpisodesCard episodes={ episodes} />
          </li>
        ))}
      </ul>
    </div>
  );
};
