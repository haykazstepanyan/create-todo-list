import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Modals.scss";

function CreateNewTask(props) {
	const {
		closeHandler,
		dataHandler,
		createHandler,
		isOpen,
		data: { title, description, color },
	} = props;
	const isDisabled = title === "" || description === "";

	return (
		<Dialog
			open={isOpen}
			onClose={closeHandler}
			aria-labelledby="form-dialog-title"
			className="new-todo modals"
		>
			<DialogTitle
				id="form-dialog-title"
				className="modals__title new-todo__title"
			>
				Create new Task
				<IconButton
					aria-label="Close"
					className="close-button"
					onClick={closeHandler}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<div className="input-field">
					<input
						type="text"
						placeholder="Title"
						name="title"
						value={title}
						onChange={dataHandler}
					/>
				</div>
				<div className="input-field">
					<input
						type="text"
						placeholder="Description"
						name="description"
						value={description}
						onChange={dataHandler}
					/>
				</div>
				<div className="input-field">
					<input
						type="color"
						name="color"
						value={color}
						onChange={dataHandler}
					/>
				</div>
			</DialogContent>
			<DialogActions>
				<button
					className="modals__buttons modals__buttons_cancel"
					onClick={closeHandler}
				>
					Cancel
				</button>
				<button
					className="modals__buttons modals__buttons_submit"
					onClick={createHandler}
					disabled={isDisabled}
				>
					Save
				</button>
			</DialogActions>
		</Dialog>
	);
}

export default CreateNewTask;
