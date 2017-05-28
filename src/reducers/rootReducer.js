import { combineReducers } from 'redux';

import userReducer from '../reducers/userReducer';
import workReducer from '../reducers/workReducer';

export default combineReducers({
	userReducer,
	workReducer
});