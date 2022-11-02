import Axios from 'axios';
import { Character } from './character.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';
// import { Lookup } from 'common/models';
// import { mockCities, mockCharacterCollection } from './character.mock-data';

const url = 'https://rickandmortyapi.com/api/character/'

export const getCharacter = async (id: number): Promise<Character> => {
  const query = gql `
    query {
      character(id:${id}) {
        id
        image
        name
        gender
        species
        type
        origin {
          name
        }
      }
    }
  `;
  const { character } = await graphQLClient.request(query);
  return character;
  // const { data } = await Axios.get<Character>(`${url}${id}`);
  // return data;
  // return mockCharacterCollection.find((h) => h.id === id);
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
