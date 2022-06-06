import React, { useState, useEffect } from 'react';

import { Container, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import axios from 'axios';

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
			<Container fixed>
				<Typography variant='h2'>Tasks</Typography>
				<Link to='/'>Regresar a Home</Link>
				<br />
				<br />
				<Grid container spacing={3}>
					{tasks.map((task, index) => (
						<Grid item xs={2} key={task._id}>
							<Button
								as={Link}
								variant='contained'
								to={`/task/${task._id}`}
								sx={{
									textDecoration: 'none',
								}}
							>
								Tarea: {index + 1}
							</Button>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default TaskCard;
