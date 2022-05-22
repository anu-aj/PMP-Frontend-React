import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SIST from '../imgs/SIST.png';
import SignIn from './SignIn';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Login() {
  return (
    <div className='login'>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={0}  columns={{ xs: 4, md: 12 }}>
          <Grid sm={6} >
            <Item sx={{
            margin: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}> 
          <img src={SIST}  alt='sistIcon'></img> 
          </Item>
          </Grid>
          <Grid item sm={6}>
            <Item>
              <SignIn />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
    
  );
}

export default Login; 