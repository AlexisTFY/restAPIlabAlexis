import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { NewPageContextComponent, FilterContextComponent } from './pods/character-collection/character-collection.context';

ReactDOM.render(
    <>
    <FilterContextComponent>
        <NewPageContextComponent>
            <App />
        </NewPageContextComponent>
    </FilterContextComponent>
    </>,
    document.getElementById('root')
);
