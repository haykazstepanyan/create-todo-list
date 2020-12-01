const INITIALSTATE = {
	loading: true,
	error: false,
	todos: [],
	newTodo: null,
	isOpenNotifBox: false,
};

const reducer = (state = INITIALSTATE, { type, payload }) => {
	switch (type) {
		case "START_ACTION":
			return {
				...state,
				loading: true,
				error: false,
			};
		case "GET_TODOS_SUCCESS":
			return {
				...state,
				todos: payload.tasks,
				loading: false,
			};
		case "GET_TODOS_ERROR":
			return {
				...state,
				error: true,
				loading: false,
			};
		case "CREATE_TODO_SUCCESS":
			return {
				...state,
				newTodo: payload.task,
				loading: false,
			};
		case "CREATE_TODO_ERROR":
			return {
				...state,
				error: true,
				loading: false,
			};
		case "OPEN_NOTIFICATION_BOX":
			return {
				...state,
				isOpenNotifBox: true,
				notifType: payload.type,
				notifMessage: payload.message,
			};
		case "CLOSE_NOTIFICATION_BOX":
			return {
				...state,
				isOpenNotifBox: false,
			};
		case "CHANGE_TASKS_LIST":
			return {
				...state,
				todos: payload.tasks,
			};
		default:
			return state;
	}
};

export default reducer;
