import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Users />}></Route>

				<Route path="/places/new" element={<NewPlace />}></Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
};

export default App;
