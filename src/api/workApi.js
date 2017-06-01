import * as constants from "../common/constants";

class WorkApi{
	
	static getWorkByUser(user = 1, month = (new Date()).getMonth()+1, year = (new Date()).getFullYear()){
		const request = new Request(constants.BASE_URL+'training/weeks/'+month+'/'+year+'/'+user, {
			method: 'GET'
		});
		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			throw error;
		});	
	}

	static changeWeekStatus(weekId, approver, status){
		const headers = Object.assign({'Content-Type': 'application/json'});
		const request = new Request(constants.BASE_URL+'training/weeks/'+weekId+"/users/"+approver, {
			method: 'PUT',
			headers: headers, 
			body: JSON.stringify({status: status})
		});

		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});
	}

}

export default WorkApi;