import * as React from 'react';
import { EpisodesEntityVm } from './episodes.vm';
import { getEpisodes } from './api';
import { mapFromApiToVm } from './episodes.mappers';
import { mapToCollection } from 'common/mappers';

export const useEpisodesCollection = () => {
  const [episodesCollection, setEpisodesCollection] = React.useState<EpisodesEntityVm[]>(
    []
  );

  const loadEpisodesCollection = () => {
    getEpisodes().then((episodes) => {
      console.log('resilt', episodes);
      setEpisodesCollection(mapToCollection(episodes.results, mapFromApiToVm))
    }
    
    );
  };

  React.useEffect(() => {
    loadEpisodesCollection();
  }, []);

  return { episodesCollection, loadEpisodesCollection };
};
