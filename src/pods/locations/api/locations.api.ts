import { LocationsEntityApi } from './locations.api-model';
import { gql } from 'graphql-request'
import { graphQLClient } from 'core/api';

export const getLocations = async (): Promise<LocationsEntityApi> => {
  const query = gql `
    query {
      locations {
        results {
          id
          name
          type
          dimension
        }
      }
    }
  `;
  const { locations } = await graphQLClient.request(query);
  return locations;
};
