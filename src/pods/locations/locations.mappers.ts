import * as apiModel from './api/locations.api-model';
import * as viewModel from './locations.vm';

export const mapFromApiToVm = (
  location: apiModel.LocationsEntityApi
): viewModel.LocationsEntityVm => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
});

