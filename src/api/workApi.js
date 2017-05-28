class WorkApi{
	
	static getWorkByUser(user, month = (new Date()).getMonth()+1, year = (new Date()).getFullYear()){
		const request = new Request('https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/'+month+'/'+year+'/'+user, {
			method: 'GET'
		});
		return fetch(request).then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});	
	}

}

export default WorkApi;