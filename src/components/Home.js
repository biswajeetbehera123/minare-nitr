import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:'transparent' ,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  text:'white',
  textAlign: 'center',
  paddingLeft: 'auto',
  paddingRight: 'auto'
}));

const  Home =() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Item>
            <h1>About Minare</h1>
            <Typography style={{width:"1000px", marginLeft:"auto", marginRight:"auto"}}>
            The Mining Engineering Society (MES), an association of students, faculty and alumni of the Department was
established in 1984 by the 1st batch alumni of the Department, with a mission is to promote mining engineering
education as well as to function as a link between students and industry by offering platforms for students to learn
about real-world difficulties. With the aim of providing a platform to the young minds to showcase their talent and
promote networking with industry and academia; the National Level Annual Geo-Mining festival was started in 2014.
It has grown with each passing year as seen by the rise in the number of institutions and students taking part in the
festival. Participants in MINARE include students from IIT-KGP, IIT (ISM) Dhanbad, NIT Raipur, Anna University, BIT
Sindri, GCE Keonjhar, AKs University Satna etc. The eighth edition of MINARE is expected to achieve more milestones
with a host of technical events including mining robotics, case studies, workshops, guest lectures, and treasure hunt
etc.
            </Typography>
          </Item>
        </Grid>
        
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home