import EmptyListIcon from "../../assets/img/nothing-to-show.jpg";

function EmptyList() {
	return (
		<div className="task-box__no-tasks">
			<h2>You don't have any tasks</h2>
			<img src={EmptyListIcon} alt="nothing-to-show" />
		</div>
	);
}

export default EmptyList;
