import Axios from 'axios';
import { Info, CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  // return characterCollection;
  const { data } = await Axios.get<CharacterEntityApi[]>(url);
  return data;
};

// export const deleteCharacter = async (id: string): Promise<boolean> => {
//   characterCollection = characterCollection.filter((h) => h.id !== id);
//   return true;
// };
