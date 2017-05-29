const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth()+1; 

export default {

	users: [],
	selectedUser: {},
	monthlyData: {
		year: currentYear,
		weeks: [],
		month: currentMonth
	},
	selectedYear: currentYear,
	selectedMonth: currentMonth,
	selectedWeek: -1
}