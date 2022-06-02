import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const TaskCard = () => {
	const [tasks, setTasks] = useState([]);

	const taskURL =
		process.env.REACT_APP_API_URI || 'http://localhost:3000/api/tasks';

	useEffect(() => {
		axios.get(taskURL).then((res) => {
			setTasks(res.data);
		});
	}, [taskURL]);

	return (
		<>
			<h1>Tasks</h1>
			<Link to='/'>Regresar a Home</Link>

			{tasks.map((taskCard) => (
				<div key={taskCard._id}>
					<h3>{taskCard.title}</h3>
					<p>
						<b>Descripcion:</b> {taskCard.description}
					</p>
					<p>
						<b>Status:</b> {taskCard.done === true ? 'Hecha' : 'Pendiente'}
					</p>
				</div>
			))}
		</>
	);
};

export default TaskCard;
