import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { NewPageContext, FilterContext } from'./character-collection.context';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link, generatePath } from 'react-router-dom';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete } = props;
  const { newPage, setNewPage } = React.useContext(NewPageContext);
  const { filter, setFilter } = React.useContext(FilterContext);

  const prevPage = () => {
    if (newPage > 1) {
      setNewPage(newPage - 1);
    }
  } ;

  const nextPage = () => {
    setNewPage(newPage + 1);
  } 

  return (
    <div className={classes.root}>

      <Link to={generatePath("/episodes")} style={{ textDecoration: "none", marginRight: '10px' }}>
        <Button variant="contained" color="primary">
          Lista de Episodios
        </Button>
      </Link>

      <Link to={generatePath("/locations")} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Lista de Localizaciones
        </Button>
      </Link>

      <Paper component="form" style={{marginTop:'15px', padding: '2px 4px', display: 'flex', alignItems: 'center', width: 400, background: "#f5f5f5", boxShadow: "none" }}>
        <InputBase
          style={{ marginLeft: 1, flex: 1 }}
          placeholder="Filtra entre los personajes ..."
          onChange={e => {
            setFilter(e.target.value)
          }}
        />
          <SearchIcon />
      </Paper>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>

      <Button onClick={prevPage} size="small" variant="contained" color="primary" style={{ margin: "40px 5px" }}>
        Atrás<script src=""></script>
      </Button>

      <Button onClick={nextPage} size="small" variant="contained" color="primary" style={{ margin: "40px 5px" }}>
        Siguiente
      </Button>

    </div>
  );
};
