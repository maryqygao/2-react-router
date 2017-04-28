import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './pages/Layout';

import styles from '../css/app.css';

let element = `
  <div class="${styles.element}">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
  </div>
`;

document.write(element);

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
