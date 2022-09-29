import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
	{
		id: nanoid(),
		name: "Eliezer",
		email: "eliezermario008@gmail.com",
		phone: "04127592499",
	},
];

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.push({
				...action.payload,
				id: nanoid(),
			});
		},
		editUser: (state, action) => {
			const { id, name, email, phone } = action.payload;
			const user = state.find((item) => item.id === id);
			if (user) {
				user.name = name;
				user.email = email;
				user.phone = phone;
			}
		},
		deleteUser: (state, action) => {
			const user = state.find((item) => item.id === action.payload);
			if (user) {
				state.splice(state.indexOf(user), 1);
			}
		},
	},
});
export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
