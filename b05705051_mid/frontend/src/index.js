import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Container from './Containers/container.js';
import * as serviceWorker from './serviceWorker';

let n = "why?";
const columnIndex = [ 'Prize', 'Amount' ];
const prizeTable = { 
  prize: [
    [ 'Lexis', 1 ],
    [ 'PS4', 2 ],
    [ 'Television', 2 ],
    [ 'Movie', 3 ],
  ]
};
const blockList = ['block1', 'block2', 'block3', 'block4']
ReactDOM.render(<Container prizeTable = {prizeTable}
                        columnIndex = {columnIndex}
                        blockList = {blockList}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
