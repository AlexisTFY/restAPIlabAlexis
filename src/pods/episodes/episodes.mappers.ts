import * as apiModel from './api/episodes.api-model';
import * as viewModel from './episodes.vm';

export const mapFromApiToVm = (
  episode: apiModel.EpisodesEntityApi
): viewModel.EpisodesEntityVm => ({
  id: episode.id,
  name: episode.name,
  episode: episode.episode,
  created: episode.created,
});

