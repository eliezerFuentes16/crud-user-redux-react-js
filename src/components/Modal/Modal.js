import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import UserForm from "../UserForm/UserForm";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../features/users/userSlice";
import { UserContex } from "../../context/context";

export default function Modal() {
	const { user, setUser, open, setOpen, handleClose, title, mode } =
		React.useContext(UserContex);
	const changeInput = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};
	const dispath = useDispatch();

	const handelSubmit = () => {
		if (mode === "add") {
			dispath(addUser(user));
			setUser({
				name: "",
				email: "",
				phone: "",
			});
			setOpen(false);
		} else {
			dispath(editUser(user));
		}
	};
	return (
		<div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{title}</DialogTitle>

				<DialogContent
					sx={{
						minWidth: "500px",
						width: "90%",
					}}
				>
					<UserForm user={user} changeInput={changeInput}></UserForm>
				</DialogContent>
				<DialogActions sx={{ paddingBottom: "20px" }}>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						variant='contained'
						endIcon={<SendIcon />}
						onClick={() => handelSubmit()}
					>
						Send
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
