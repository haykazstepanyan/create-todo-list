import { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Modals.scss";

function EditTask(props) {
	const { isOpen, closeHandler, editHandler, data } = props;
	const [editData, setEditData] = useState({
		title: data.title,
		description: data.description,
		color: data.color,
	});

	function editDataHandler(e) {
		const { name, value } = e.target;
		setEditData((data) => ({
			...data,
			[name]: value,
		}));
	}
	const isDisabled = editData.title === "" || editData.description === "";

	return (
		<Dialog
			open={isOpen}
			onClose={closeHandler}
			aria-labelledby="form-dialog-title"
			className="modals edit-modal"
		>
			<DialogTitle id="form-dialog-title" className="modals__title">
				Edit Task
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
						name="title"
						value={editData.title}
						onChange={editDataHandler}
					/>
				</div>
				<div className="input-field">
					<input
						type="text"
						name="description"
						value={editData.description}
						onChange={editDataHandler}
					/>
				</div>
				<div className="input-field">
					<input
						type="color"
						name="color"
						value={editData.color}
						onChange={editDataHandler}
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
					disabled={isDisabled}
					onClick={() => editHandler(data._id, editData)}
				>
					Edit
				</button>
			</DialogActions>
		</Dialog>
	);
}

EditTask.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeHandler: PropTypes.func.isRequired,
	editHandler: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
};

export default EditTask;
