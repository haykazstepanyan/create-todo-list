import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createTask, deleteAllTasks } from "../../redux/actions";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TaskList from "./TaskList";
import EmptyList from "./EmptyList";
import CreateNewTask from "../modals/CreateNewTask";
import "./Tasks.scss";

function TasksList({ todoItems }) {
	const newTodoDefaultValues = {
		title: "",
		description: "",
		color: "#000",
	};

	const [todoModal, setTodoModal] = useState(false);
	const [newTodoData, setNewTodoData] = useState(newTodoDefaultValues);
	const dispatch = useDispatch();

	function openTodoModal() {
		setTodoModal(true);
	}

	function handleDeleteAllTasks() {
		dispatch(deleteAllTasks());
	}

	const closeTodoModal = useCallback(() => {
		setTodoModal(false);
		setNewTodoData(newTodoDefaultValues);
	}, []);

	const createNewTodo = useCallback(() => {
		dispatch(createTask(newTodoData));
	}, [newTodoData]);

	const dataHandler = useCallback(
		(e) => {
			const { name, value } = e.target;
			setNewTodoData((data) => ({
				...data,
				[name]: value,
			}));
		},
		[setNewTodoData]
	);

	return (
		<>
			<div className="task-box__heading">
				<h1>My Tasks</h1>
				<div className="task-box__new-todo">
					<AddCircleIcon onClick={openTodoModal} />
				</div>
			</div>
			<ul className="task-box__list">
				{!todoItems.length ? (
					<EmptyList />
				) : (
					<>
						<div className="task-box__clear-all" onClick={handleDeleteAllTasks}>
							<span>Clear All Tasks</span>
						</div>
						{todoItems?.map((item) => (
							<TaskList task={item} key={item._id} />
						))}
					</>
				)}
			</ul>
			{todoModal && (
				<CreateNewTask
					closeHandler={closeTodoModal}
					isOpen={todoModal}
					data={newTodoData}
					dataHandler={dataHandler}
					createHandler={createNewTodo}
				/>
			)}
		</>
	);
}

TaskList.propTypes = {
	todoItems: PropTypes.arrayOf(
		PropTypes.objectOf({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
		})
	),
};

export default TasksList;
