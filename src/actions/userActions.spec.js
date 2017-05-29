import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/userActions';
import * as actionTypes from '../common/actionTypes';
import nock from 'nock';
import * as constants from "../common/constants";

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
	afterEach(() => {
		nock.cleanAll()
	})

	it('creates FETCH_USERS_SUCCESS when fetching users', () => {
		nock(constants.BASE_URL+'users')
		.get('/')

		const expectedActions = { type: actionTypes.FETCH_USERS_SUCCESS , users: []}
		const store = mockStore({ users: [] })

		return store.dispatch(actions.fetchUsers())
		.then(() => {
			expect(store.getActions()[0].type).toEqual(expectedActions.type);
			expect(Array.isArray(store.getActions()[0].users)).toEqual(true);
			expect(store.getActions()[0].users.length).toEqual(14);
		})
	})
})