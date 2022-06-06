import { React } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButtonsGroup = () => {
	const generos = ['Masculino', 'Femenino', 'Elefante'];

	return (
		<FormControl>
			<FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
			<RadioGroup
				aria-labelledby='demo-radio-buttons-group-label'
				defaultValue='female'
				name='radio-buttons-group'
			>
				{generos.map((genero) => (
					<FormControlLabel
						value={genero}
						control={<Radio />}
						label={genero}
						myProp={genero}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;
