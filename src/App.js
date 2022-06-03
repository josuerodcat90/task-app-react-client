import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Task from './pages/Tasks';
import TaskViewer from './pages/TaskViewer';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/tasks' element={<Task />} />
					<Route path='/task/:id' element={<TaskViewer />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
