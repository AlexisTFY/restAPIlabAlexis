import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  gender: character.gender,
  image: character.image,
  status: character.status,
  species: character.species,
  type: character.type,
  origin:character.origin.name,
  bestSentences: character.bestSentences,
  // description: character.shortDescription,
  // rating: character.characterRating,
  // address: character.address1,
  // city: character.city,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    gender: character.gender,
    image: character.image,
    status: character.status,
    species: character.species,
    type: character.type,
    origin:character.origin,
    bestSentences: character.bestSentences,
    // shortDescription: character.description,
    // characterRating: character.rating,
    // address1: character.address,
    // city: character.city,
  } as unknown) as apiModel.Character);
