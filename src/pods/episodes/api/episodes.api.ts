import { EpisodesEntityApi } from './episodes.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';

export const getEpisodes = async (): Promise<EpisodesEntityApi[]> => {
  const query = gql `
  query {
        episodes {
            results {
            id
            name
            episode
            created
            }
        }      
    }
  `;
  const { episodes } = await graphQLClient.request(query);
  return episodes;
};
