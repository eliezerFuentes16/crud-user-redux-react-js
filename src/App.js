import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/context";
import AppUi from "./components/AppUi/AppUi";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<UserProvider>
							<AppUi></AppUi>
						</UserProvider>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export { App };
