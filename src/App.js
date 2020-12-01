import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, setTasks } from "./redux/actions";
import { getCookies } from "./components/helpers/cookies";
import CircularProgress from "@material-ui/core/CircularProgress";
import TasksList from "./components/tasks/TasksList";
import Notification from "./components/notification/Notification";

function App() {
	const todoList = useSelector((state) => state.todos);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		const todoCookie = getCookies("tasks");
		if (!todoCookie) {
			dispatch(getTasks());
		} else {
			dispatch(setTasks(JSON.parse(todoCookie)));
		}
	}, []);

	return (
		<div className="App">
			<div className="task-box">
				{loading ? (
					<div className="task-box__loader">
						<CircularProgress size={100} />
					</div>
				) : (
					<TasksList todoItems={todoList} />
				)}
			</div>
			<Notification />
		</div>
	);
}

export default App;
