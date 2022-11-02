import Axios from 'axios';
import { Info, CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (page:number, filter:string): Promise<Info<CharacterEntityApi[]>> => {
  // return characterCollection;
  // const { data } = await Axios.get<Info<CharacterEntityApi[]>>(url);
  // return data.results;
  const query = gql `
    query {
      characters (
        page:${page}
        filter: {
          name:"${filter}"
        }
        ) {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          image
          name
          gender
          species
          status
          type
          location {
            name
          }
        }
      }
    }
  `;
  const { characters } = await graphQLClient.request(query);
  console.log(characters);
  return characters;
};

// export const deleteCharacter = async (id: string): Promise<boolean> => {
//   characterCollection = characterCollection.filter((h) => h.id !== id);
//   return true;
// };
