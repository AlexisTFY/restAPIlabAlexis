import Axios from 'axios';
import { Info, CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';

export const getCharacterCollection = async (page:number, filter:string): Promise<Info<CharacterEntityApi[]>> => {
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
  return characters;
};

