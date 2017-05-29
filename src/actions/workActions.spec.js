import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/workActions';
import * as actionTypes from '../common/actionTypes';
import nock from 'nock';
import * as constants from "../common/constants";

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
	afterEach(() => {
		nock.cleanAll()
	})

	it('creates GET_WORK_BY_USER_SUCCESS when fetching data about an user', () => {
		nock(constants.BASE_URL+'training/weeks/1/2017/1').get('/')

		const expectedActions = { type: actionTypes.GET_WORK_BY_USER_SUCCESS , monthlyData: {}}
		const store = mockStore({ monthlyData: [] })

		return store.dispatch(actions.getWorkByUser(1, 1, 2017))
		.then(() => {
			expect(store.getActions()[0].type).toEqual(expectedActions.type);
			expect(store.getActions()[0].monthlyData.data.owner_id).toEqual("1");
			expect(store.getActions()[0].monthlyData.data.month).toEqual(1);
			expect(store.getActions()[0].monthlyData.data.owner_id).toEqual("1");
			expect(Array.isArray(store.getActions()[0].monthlyData.data.weeks)).toEqual(true);
		})
	})

	it('creates UPDATE_SELECTED_MONTH_SUCCESS when selecting a new month', () => {
		const expectedActions = { type: actionTypes.UPDATE_SELECTED_MONTH_SUCCESS , month: {}}
		const store = mockStore({ month: {} })
		const month = 4;

		let returnedData = store.dispatch(actions.updateSelectedMonth(month)); 
			expect(returnedData.type).toEqual(expectedActions.type);
			expect(returnedData.month).toEqual(month);
	})

	it('creates UPDATE_SELECTED_YEAR_SUCCESS when selecting a new year', () => {
		const expectedActions = { type: actionTypes.UPDATE_SELECTED_YEAR_SUCCESS , year: {}}
		const store = mockStore({ year: {} })
		const year = 2015;

		let returnedData = store.dispatch(actions.updateSelectedYear(year)); 
			expect(returnedData.type).toEqual(expectedActions.type);
			expect(returnedData.year).toEqual(year);
	})
})