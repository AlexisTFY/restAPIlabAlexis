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
      />
      <CardContent>
        <div className={classes.content}>
          <p>episode: {episodes.episode}</p>
          <p>Created: {episodes.created}</p>
        </div>
      </CardContent>
    </Card>
  );
};
