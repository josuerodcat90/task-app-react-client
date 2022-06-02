import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Task from './pages/Tasks';
import TaskViewer from './pages/TaskViewer';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/tasks' element={<Task />} />
					<Route path='/myTask' element={<TaskViewer />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
