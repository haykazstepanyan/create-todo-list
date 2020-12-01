import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import tinycolor from "tinycolor2";
import { deleteTask, editTask } from "../../redux/actions";
import PropTypes from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@material-ui/icons/Edit";
import DeleteTask from "../modals/DeleteTask";
import EditTask from "../modals/EditTask";

function TaskList({ task }) {
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const dispatch = useDispatch();
	const { title, description, color, _id: id } = task;
	const boxColor = tinycolor(color);
	const lightBox = boxColor.isLight();
	const darkBox = boxColor.isDark();

	const boxClassName = lightBox
		? "task-box__item_dark"
		: darkBox
		? "task-box__item_light"
		: "";

	function openDeleteModal() {
		setDeleteModal(true);
	}
	function openEditModal() {
		setEditModal(true);
	}

	const closeDeleteModal = useCallback(() => setDeleteModal(false), []);
	const closeEditModal = useCallback(() => setEditModal(false), []);

	const handleDeleteTask = useCallback(
		(id) => {
			dispatch(deleteTask(id));
			closeDeleteModal();
		},
		[closeDeleteModal]
	);
	const handleEditTask = useCallback(
		(id, data) => {
			dispatch(editTask(id, data));
			closeEditModal();
		},
		[closeEditModal]
	);

	return (
		<li
			className={`task-box__item ${boxClassName}`}
			style={{ background: color }}
		>
			<div className="task-box__content">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="task-box__buttons">
					<EditIcon className="task-box__icon" onClick={openEditModal} />
					<ClearIcon className="task-box__icon" onClick={openDeleteModal} />
				</div>
			</div>
			{deleteModal && (
				<DeleteTask
					isOpen={deleteModal}
					closeHandler={closeDeleteModal}
					deleteHandler={() => handleDeleteTask(id)}
				/>
			)}
			{editModal && (
				<EditTask
					isOpen={editModal}
					closeHandler={closeEditModal}
					data={task}
					editHandler={handleEditTask}
				/>
			)}
		</li>
	);
}

TaskList.propTypes = {
	task: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.array.isRequired,
		color: PropTypes.number.isRequired,
	}),
};

export default TaskList;
