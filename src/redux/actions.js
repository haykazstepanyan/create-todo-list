import { setCookies, deleteCookies } from "../components/helpers/cookies";

const firstName = "Haykaz";
const lastName = "Stepanyan";

export const getTasks = () => {
	return (dispatch) => {
		dispatch({ type: "START_ACTION" });
		fetch(`https://todo.eachbase.com/api/${firstName}${lastName}/todos`)
			.then((response) => response.json())
			.then((res) => {
				const reversedTasks = res.reverse();
				setCookies("tasks", JSON.stringify(reversedTasks));
				dispatch(deleteAllTasksFromDB(reversedTasks));
				dispatch(setTasks(reversedTasks));
			})
			.catch(() => {
				dispatch({
					type: "GET_TODOS_ERROR",
				});
			});
	};
};

export const setTasks = (tasks) => ({
	type: "GET_TODOS_SUCCESS",
	payload: {
		tasks,
	},
});

export const deleteAllTasks = () => {
	deleteCookies("tasks");
	return setTasks([]);
};

export const createTask = (data) => {
	return (dispatch, getState) => {
		dispatch({ type: "START_ACTION" });
		fetch(`https://todo.eachbase.com/api/${firstName}${lastName}/todos`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				const newTasks = [data, ...getState().todos];
				setCookies("tasks", JSON.stringify(newTasks));
				dispatch(deleteTaskFromDB(data._id));
				dispatch(setTasks(newTasks));
				dispatch(
					showNotification("success", "The task is successfully created")
				);
			})
			.catch(() => {
				dispatch(showNotification("error"));
				dispatch({
					type: "CREATE_TODO_ERROR",
				});
			});
	};
};

export const deleteTask = (id) => {
	return (dispatch, getState) => {
		dispatch({ type: "START_ACTION" });
		const newTasks = getState().todos.filter((todo) => todo._id !== id);
		setCookies("tasks", JSON.stringify(newTasks));
		dispatch(setTasks(newTasks));
		dispatch(showNotification("success", "The task is already deleted"));
	};
};

const deleteTaskFromDB = (id) => {
	return (dispatch) => {
		fetch(`https://todo.eachbase.com/api/${firstName}${lastName}/todos/${id}`, {
			method: "DELETE",
		}).catch(() => dispatch(showNotification("error")));
	};
};

const deleteAllTasksFromDB = (tasks) => {
	return (dispatch) => {
		let requests = tasks.map(({ _id }) =>
			fetch(
				`https://todo.eachbase.com/api/${firstName}${lastName}/todos/${_id}`,
				{ method: "DELETE" }
			)
		);
		Promise.all(requests).catch(() => dispatch(showNotification("error")));
	};
};

export const editTask = (id, data) => {
	return (dispatch, getState) => {
		dispatch({ type: "START_ACTION" });
		const tasks = getState().todos;
		const editedTaskIndex = tasks.findIndex((task) => task._id === id);
		tasks[editedTaskIndex] = {
			...tasks[editedTaskIndex],
			title: data.title,
			description: data.description,
			color: data.color,
		};
		const newTasks = [...tasks];
		setCookies("tasks", JSON.stringify(newTasks));
		dispatch(setTasks(newTasks));
		dispatch(showNotification("success", "Task is successfully updated"));
	};
};

const showNotification = (notifType, message) => ({
	type: "OPEN_NOTIFICATION_BOX",
	payload: {
		type: notifType,
		message,
	},
});

export const hideNotification = () => ({
	type: "CLOSE_NOTIFICATION_BOX",
});
