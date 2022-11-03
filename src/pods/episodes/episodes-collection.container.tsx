import * as React from 'react';
import { useEpisodesCollection } from './episodes-collection.hook';
import { CharacterCollectionComponent } from './episodes-collection.component';

export const EpisodesCollectionContainer = () => {
  const { episodesCollection, loadEpisodesCollection } = useEpisodesCollection();

  React.useEffect(() => {
    loadEpisodesCollection();
  }, []);


  return (
    <CharacterCollectionComponent
      episodesCollection={episodesCollection}
    />
  );
};
