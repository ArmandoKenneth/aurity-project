import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import {BrowserRouter } from 'react-router-dom';

import { fetchUsers } from './actions/userActions';
import { getWorkByUser } from './actions/workActions';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)	
);

store.dispatch(fetchUsers());
store.dispatch(getWorkByUser());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
	    	<App />
    	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);	