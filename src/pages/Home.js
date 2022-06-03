import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Grid, Typography } from '@mui/material';

const Home = () => {
	return (
		<>
			<Container fixed>
				<Typography variant='h3'>Home Page</Typography>
				<br />
				<Grid container spacing={3}>
					<Grid item xs={2}>
						<Link to='/tasks'>Tasks</Link>
					</Grid>
					<Grid item xs={2}>
						<Link to='/about'>About</Link>
					</Grid>
					<Grid item xs={2}>
						<Link to='/contact'>Contact</Link>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home;
