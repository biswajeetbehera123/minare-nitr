import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  text: 'white',
  textAlign: 'center',
}));

const Home = () => {
  return (
    <section id="about">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Item>
              <h1>About Minare</h1>
              <Typography style={{ width: "1000px", marginLeft: "auto", marginRight: "auto" }}>
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

          <Grid item xs={6}>
            <Item>
              <h1>About Department</h1>
              <p style={{ width: "600px", marginLeft: "auto", marginRight: "auto", paddingTop: '10px', lineHeight: '25px' }} >The Department of Mining Engineering at NIT Rourkela was established in 1979 in the midst of coal and mineral belt
                with a vision to become a global leader of higher learning in the field of eco-friendly exploitation and utilization of
                mineral resources for the welfare of the society and to be a preferred destination for undergraduate and graduate
                studies. The Department specializes in Mining Technology, Geomechanics and Strata Control, Mine Environment
                and Safety Engineering, Clean Coal Technology, Application of GIS and Remote Sensing in Mining, Computer
                Application in Mining, Mine Planning, Mine Surveying etc. It boasts modern and sophisticated equipment for
                physical as well as the latest computing facilities with state-of-the-art mining software. The faculty members are
                part of the different Expert and Technical Committees constituted for policy formulation and technical evaluation for
                mining industry. The Department frequently conducts continuing education programmes for the benefit of the
                professionals from industry and other academic, research and government regulatory organisations representing
                both national and international level.All-round development of students is practiced with exposure to mines through
                study tours to nearby mines, technical talks by outside experts, industry oriented projects and a host of other
                technical activities.</p>
            </Item>
          </Grid>
          <Grid item xs={6} >
            <Item>
              <img style={{ width: '650px' }} src='https://res.cloudinary.com/dtxoiglst/image/upload/v1710261393/minare/t1mapgsdjq2eyc4ch1fb.jpg' />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Home