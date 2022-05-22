import * as React from 'react';
import sist3 from '../imgs/sist3.jpg';
import Grid from '@mui/material/Grid';

export default function About(){
    return(
    <div className="About">
        	<Grid container justifyContent='center' alignItems='center'>
				<img src={sist3} alt='about' style={{ height: "50vmin" }} />
			</Grid>
			<Grid container justifyContent='center' alignItems='center'>
				<Grid item>
					
				</Grid>
			</Grid>
    </div>
    );
}

