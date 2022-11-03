import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { LocationsEntityVm } from '../locations.vm';
import * as classes from './locations-card.styles';

interface Props {
  locations: LocationsEntityVm;
}

export const LocationsCard: React.FunctionComponent<Props> = (props) => {
  const { locations } = props;

  return (
    <Card>
      <CardHeader
        title={locations.name}
      />
      <CardContent>
        <div className={classes.content}>
          <p>Type: {locations.type}</p>
          <p>Locations {locations.dimension}</p>
        </div>
      </CardContent>
    </Card>
  );
};
