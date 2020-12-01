import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Modals.scss";

function DeleteTask(props) {
	const { isOpen, closeHandler, deleteHandler } = props;
	return (
		<Dialog
			open={isOpen}
			onClose={closeHandler}
			aria-labelledby="form-dialog-title"
			className="modals delete-modal"
		>
			<DialogTitle id="form-dialog-title" className="modals__title">
				<IconButton
					aria-label="Close"
					className="close-button"
					onClick={closeHandler}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<h3>Are you sure you want to delete?</h3>
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
					onClick={deleteHandler}
				>
					Delete
				</button>
			</DialogActions>
		</Dialog>
	);
}

DeleteTask.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeHandler: PropTypes.func.isRequired,
	deleteHandler: PropTypes.func.isRequired,
};

export default DeleteTask;
