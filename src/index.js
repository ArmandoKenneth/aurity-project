// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
// import { Router, browserHistory } from 'react-router';
import {BrowserRouter } from 'react-router-dom';

import { fetchUsers } from './actions/userActions';
// import { browserHistory } from 'react-router';  
// import routes from './routes';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	applyMiddleware(thunk)	
);

store.dispatch(fetchUsers());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
	    	<App />
    	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
	// <Provider store={store}>
	// 	<Router history={browserHistory} routes={routes} />
	// </Provider>,
// <BrowserRouter >
// 			<div>
			// <Route path="/" component={App}>
			// <Route path="/users" component={Main}/>
// 			</Route>
// 			</div>
// 		</BrowserRouter> 