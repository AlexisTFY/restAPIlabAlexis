import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { EpisodesEntityVm } from '../episodes.vm';
import * as classes from './episodes-card.styles';

interface Props {
  episodes: EpisodesEntityVm;
}

export const EpisodesCard: React.FunctionComponent<Props> = (props) => {
  const { episodes } = props;

  return (
    <Card>
      <CardHeader
        title={episodes.name}
        subheader={`${episodes.episode} - ${episodes.created} `}
      />
      <CardContent>
        <div className={classes.content}>
        </div>
      </CardContent>
    </Card>
  );
};
