import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, cities, onSave } = props;

  return (
    <>
    <img src={character.image} alt="" />
    <p>Name: {character.name}</p>
    <p>Gender: {character.gender}</p>
    <p>Species: {character.species}</p>
    <p>Type: {character.type}</p>
    <p>Origin: {character.origin}</p>
    <p>bestSentences: {character.bestSentences}</p>
     <Formik
       onSubmit={onSave}
       initialValues={character}
       enableReinitialize={true}
      validate={formValidation.validateForm}
     >
       {() => (
         <Form className={classes.root}>
           <TextFieldComponent name="bestSentences" label="bestSentences" />
           {/* <TextFieldComponent name="name" label="Name" />
           <TextFieldComponent name="gender" label="gender" />
           <RatingComponent name="rating" max={5} />
           <SelectComponent name="city" label="City" items={cities} />
           <TextFieldComponent
             name="description"
             label="Description"
             multiline={true}
             rows={3}
             rowsMax={5}
           /> */}
           <Button type="submit" variant="contained" color="primary">
             Save
           </Button>
         </Form>
       )}
    </Formik>
    </>
  );
};
