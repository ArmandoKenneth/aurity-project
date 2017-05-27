import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { Router, browserHistory } from 'react-router';  
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)	
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
