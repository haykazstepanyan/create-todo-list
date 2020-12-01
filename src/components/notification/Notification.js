import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNotification } from "../../redux/actions";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import BlockIcon from "@material-ui/icons/Block";
import "./Notification.scss";

function Notification() {
	const isOpen = useSelector((state) => state.isOpenNotifBox);
	const type = useSelector((state) => state.notifType);
	const message = useSelector((state) => state.notifMessage);
	const dispatch = useDispatch();
	useEffect(() => {
		isOpen && setTimeout(() => dispatch(hideNotification()), 3000);
	}, [isOpen]);

	return isOpen ? (
		<div className="notification">
			<div className="notification__content">
				{type === "success" ? (
					<>
						<DoneOutlineIcon className="notification__icon notification__icon_success" />
						{message}
					</>
				) : (
					<>
						<BlockIcon className="notification__icon notification__icon_error" />
						<p>Something went wrong. Please try again later</p>
					</>
				)}
			</div>
		</div>
	) : null;
}

export default Notification;
