import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { UserContex } from "../../context/context";
import Modal from "../Modal/Modal";
import DataTable from "../table/table";
import "./styleUserList.css";
function UserList() {
	const { handleClickOpen, handlelDelete, onEdit, userState } =
		useContext(UserContex);
	return (
		<React.Fragment>
			<h1 className={"title"}>USERS</h1>
			<Stack>
				<Button
					variant='outlined'
					sx={{
						margin: "auto",
					}}
					onClick={handleClickOpen}
				>
					Add User
				</Button>
			</Stack>
			<DataTable
				rows={userState}
				onDelete={handlelDelete}
				onEdit={onEdit}
			></DataTable>
			<Modal></Modal>
		</React.Fragment>
	);
}

export default UserList;
