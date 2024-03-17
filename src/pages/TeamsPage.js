import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { TypeH2 } from "react-bootstrap-icons";
import { Box, Grid, Typography } from "@mui/material";

export default function Teams() {
  const teamData = [
    {
      id: "1",
      name: "Prof. K. Umamaheshwar Rao",
      position: "Director, Patron ",
      imgurl: "https://www.nitrkl.ac.in/assets/images/director.jpg",
    },
    {
      id: "2",
      name: "Prof. A. K. Gorai",
      position: "Head of the Department, President ",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710144647/minare/soaqr9egx9v53kwpl4sw.jpg",
    },
    {
      id: "3",
      name: "Prof. H. B. Sahu",
      position: "Adviser",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710144546/minare/a1uq1txt3hpvddzubrng.jpg",
    },
    {
      id: "4",
      name: "Prof. C. K. Ala",
      position: "Treasurer",
      imgurl:
        "https://res.cloudinary.com/dh4qhdszo/image/upload/v1710664234/minare/tewkzxpded7rjr113q5p.jpg",
    },

    {
      id: "5",
      name: "Aryaman Biswal",
      position: "Vice-President ",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017062/minare/myutn9fpt0hvyunwzmdb.jpg",
    },
    {
      id: "6",
      name: "Satyabrata Biswal",
      position: "Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017063/minare/kbv2ua8bpinpj2mbeocr.jpg",
    },

    {
      id: "7",
      name: "Baishakhi Biswal",
      position: "Cultural Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017063/minare/qftfid7wozcmrrrurk5b.jpg",
    },
    {
      id: "8",
      name: "Piyush Kumar",
      position: "Literary Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017061/minare/umeof1jka9eijnsl16x0.jpg",
    },
    {
      id: "9",
      name: "Anurag Roy",
      position: "Games and Sports Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017062/minare/idmg45954qzm15giqs5h.jpg",
    },
    {
      id: "10",
      name: "Kanha Kalingo",
      position: "Joint Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017064/minare/lvawudfyup6ktxajrmz0.jpg",
    },
    {
      id: "11",
      name: "Tavishi Agarwal",
      position: "Joint Secretary",
      imgurl:
        "https://res.cloudinary.com/dei7rxeug/image/upload/v1710017061/minare/dp6l5wzejgf4nvbtyfvc.jpg",
    },
  ];

  const coreTeamData = [
    {
      id: "1",
      teamName: "Event management",
      pr1: "Abhijeet Kumar Nayak",
      mob1: "+91 7657017701",
      pr2: "Pranay Kishore Ray Choudhury ",
      mob2: "+91 9668457855",
    },
    {
      id: "2",
      teamName: "Technical and Database",
      pr1: "Biswajeet Behera ",
      mob1: "+91 7655042927",
      pr2: " Rahul Manglani ",
      mob2: "+91 7071660165",
    },
    {
      id: "3",
      teamName: "Publicity",
      pr1: " Ashish Kumar Barah",
      mob1: "+91 7848061103",
      pr2: "Aniket Sharma",
      mob2: "+91 8280179870",
    },
    {
      id: "4",
      teamName: "Accommodation and hospitality",
      pr1: "Amit Kumar Sahu",
      mob1: "+91 8457014106",
      pr2: "Smruti Ranjan Sethy",
      mob2: "+91 7894487946",
    },
    {
      id: "5",
      teamName: "Creative ",
      pr1: "Rahul Ranjan Dash ",
      mob1: " +919625158514",
      pr2: "Ayush Aryaman Puhan",
      mob2: "+91 9109186333",
    },
    {
      id: "6",
      teamName: "Content ",
      pr1: "Anish Das ",
      mob1: "+91 7008728552",
      pr2: "Aniket Bansal ",
      mob2: "+91 7978649718",
    },
    {
      id: "7",
      teamName: "Sponsorship ",
      pr1: " Badrish Ray",
      mob1: "+91 8917228649",
    },
  ];

  return (
    <div class="wrapper">
      <div
        style={{
          fontSize: "42px",
          color: "white",
          width: "100vw",
          textAlign: "center",
          fontWeight: "bold",
          margin: "30px",
        }}
      >
        Team
      </div>
      <div
        style={{
          color: "#B8B8B8",
          fontSize: "28px",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          margin: "14px auto 30px auto",
          textAlign: "center",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "56%" }}>Mining Engineering society</div>
      </div>

      {teamData.map((item) => {
        return (
          <>
            <div className="card" key={item.id}>
              <img className="card-image" src={item.imgurl} />

              <div className="info">
                <h1 id="team-card-head">{item.name}</h1>
                <p>{item.position}</p>
              </div>
            </div>
          </>
        );
      })}

      <div
        style={{
          color: "#B8B8B8",
          fontSize: "48px",
          letterSpacing: "0.8px",
          lineHeight: "1.5em",
          margin: "14px auto 14px auto",
          textAlign: "center",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "56%" }}>Minare</div>
      </div>

      <div
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          padding: "50px",
          justifyContent: "space-evenly",
        }}
      >
        {coreTeamData.map((item) => (
          <div
            key={item.id}
            style={{
              width: "30%",
              minWidth: "350px",
              margin: "10px",
              border: "2px solid white",
              borderRadius: "20px",
              color: "white",
              padding: "5px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              <u>{item.teamName}</u>
            </div>
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "14px" }}
            >
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="inherit">
                      <b>{item.pr1}</b>
                    </Typography>
                  </Grid>
                  <Typography>: {item.mob1}</Typography>
                </Grid>
                <Grid container>
                  {item.pr2 && (
                    <Grid item xs={6}>
                      <Typography variant="inherit">
                        <b>{item.pr2}</b>
                      </Typography>
                    </Grid>
                  )}
                  {item.mob2 && <Typography>: {item.mob2}</Typography>}
                </Grid>
              </Grid>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}
