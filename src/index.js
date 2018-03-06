import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './styles/css/style.css';
import './styles/css/uikit.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
