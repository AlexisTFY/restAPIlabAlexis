import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { NewPageContext, FilterContext } from './character-collection.context'

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const { newPage, setNewPage } = React.useContext(NewPageContext);
  const { filter, setFilter } = React.useContext(FilterContext);

  const loadCharacterCollection = () => {
    getCharacterCollection(newPage, filter).then((result) =>
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm))
    );
  };

  React.useEffect(() => {
    loadCharacterCollection();
  }, [newPage, filter]);

  return { characterCollection, loadCharacterCollection };
};
