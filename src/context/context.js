import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/users/userSlice";

const UserContex = React.createContext();

function UserProvider(props) {
	const [open, setOpen] = React.useState(false);
	const [title, setTitle] = React.useState("Add a User");
	const [mode, setMode] = React.useState("Add a User");
	const [user, setUser] = React.useState({
		name: "",
		email: "",
		phone: "",
	});
	const handleClickOpen = () => {
		setMode("add");

		setOpen(true);
		setTitle("Add a User");
		setUser({
			name: "",
			email: "",
			phone: "",
		});
	};

	const handleClose = () => {
		setOpen(false);
	};

	const userState = useSelector((state) => state.user);
	const dispath = useDispatch();

	const handlelDelete = (id) => {
		dispath(deleteUser(id));
	};

	const onEdit = (id) => {
		setMode("edit");
		setOpen(true);
		setTitle("Edit User");
		setUser(userState.find((item) => item.id === id));
	};

	return (
		<UserContex.Provider
			value={{
				user,
				setUser,
				open,
				setOpen,
				handleClickOpen,
				handleClose,
				handlelDelete,
				onEdit,
				title,
				mode,
				userState,
			}}
		>
			{props.children}
		</UserContex.Provider>
	);
}

export { UserContex, UserProvider };
