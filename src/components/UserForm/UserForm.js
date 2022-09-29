import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

function UserForm({ user, changeInput }) {
	return (
		<React.Fragment>
			<form>
				<Stack sx={{ paddingBottom: "30px" }}>
					<TextField
						label='Name'
						variant='outlined'
						type='text'
						name='name'
						onChange={changeInput}
						value={user.name}
						size='small'
						sx={{
							marginTop: "10px",
						}}
					/>

					<TextField
						label='Email'
						variant='outlined'
						type='email'
						name='email'
						onChange={changeInput}
						value={user.email}
						size='small'
						sx={{
							marginTop: "10px",
						}}
					/>
					<TextField
						label='Phone'
						variant='outlined'
						type='text'
						name='phone'
						onChange={changeInput}
						value={user.phone}
						size='small'
						sx={{
							marginTop: "10px",
						}}
					/>
				</Stack>
			</form>
		</React.Fragment>
	);
}

export default UserForm;
