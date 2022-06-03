import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { Button, Container } from '@mui/material';
import axios from 'axios';

const TaskView = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const API_URI =
		process.env.REACT_APP_API_URI || 'http://localhost:3000/api/tasks';

	const [task, setTask] = useState({});

	useEffect(() => {
		axios.get(`${API_URI}/${id}`).then((res) => {
			setTask(res.data);
		});
	}, [API_URI, id]);

	return (
		<>
			<Container fixed>
				<Button onClick={() => navigate(-1)}>Regresar</Button>
				<p>{task.title}</p>
				<p>{task.description}</p>
			</Container>
		</>
	);
};

export default TaskView;
