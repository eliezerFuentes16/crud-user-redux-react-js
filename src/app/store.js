import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/users/userSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";
// import { combineReducers } from "redux";

// const persistConfig = {
// 	key: "root",
// 	version: 1,
// 	storage,
// };

// const reducer = combineReducers({
// 	cart: userReducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: false,
// 		}),
// });

// export default store;
