import Axios from 'axios';
import { Info, CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<Info<CharacterEntityApi[]>> => {
  // return characterCollection;
  const { data } = await Axios.get<Info<CharacterEntityApi[]>>(url);
  return data.results;
};

// export const deleteCharacter = async (id: string): Promise<boolean> => {
//   characterCollection = characterCollection.filter((h) => h.id !== id);
//   return true;
// };
