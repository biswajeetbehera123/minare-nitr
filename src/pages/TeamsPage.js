import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { TypeH2 } from "react-bootstrap-icons";


export default function Teams(){

    const teamData = [
        {
            id : '1',
            name: 'Prof. K. Umamaheshwar Rao',
            position: 'Director, Patron ',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '2',
            name: 'Prof. A. K. Gorai',
            position: 'Head of the Department, President ',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710144647/minare/soaqr9egx9v53kwpl4sw.jpg'
        },
        {
            id : '3',
            name: 'Prof. H. B. Sahu',
            position: 'Adviser',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710144546/minare/a1uq1txt3hpvddzubrng.jpg'
        },
        {
            id : '4',
            name: 'Prof. C. K. Ala',
            position: 'Treasurer',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017177/minare/bqimec7k5wbwi9dtjdxd.png'
        },
          

        {
            id : '5',
            name: 'Aryaman Biswal',
            position: 'Vice-President ',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017062/minare/myutn9fpt0hvyunwzmdb.jpg'
        },
        {
            id : '6',
            name: 'Satyabrata Biswal',
            position: 'Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017063/minare/kbv2ua8bpinpj2mbeocr.jpg'
        },
        
        {
           
            id : '7',
            name: 'Baishakhi Biswal',
            position: 'Cultural Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017063/minare/qftfid7wozcmrrrurk5b.jpg'
        },
        {
           
            id : '8',
            name: 'Piyush Kumar',
            position: 'Literary Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017061/minare/umeof1jka9eijnsl16x0.jpg'
        },
        {
           
            id : '9',
            name: 'Anurag Roy',
            position: 'Games and Sports Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017062/minare/idmg45954qzm15giqs5h.jpg'
        },
        {
            id : '10',
            name: 'Kanha Kalingo',
            position: 'Joint Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017064/minare/lvawudfyup6ktxajrmz0.jpg'
        },
        {
           
            id : '11',
            name: 'Tavishi Agarwal',
            position: 'Joint Secretary',
            imgurl: 'https://res.cloudinary.com/dei7rxeug/image/upload/v1710017061/minare/dp6l5wzejgf4nvbtyfvc.jpg'
        },

        
        
    ]

    return(
        <div class="wrapper">

            <div style={{
                fontSize: '42px', 
                color:'white',
                width: '100vw',
                textAlign: 'center',
                fontWeight: 'bold',
                margin: '30px'
                }}>
                Team
            </div>

            <div style={{
                color: '#B8B8B8',
                fontSize: '18px',
                letterSpacing: '0.8px',
                lineHeight: '1.5em',
                margin: '14px auto 30px auto',
                textAlign: 'center',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center'
                }}>
                
                <div style={{width: '56%'}}>
                    Mining Engineering society
                </div>
            </div>

            {
                teamData.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img className="card-image" src= {item.imgurl} />

                            <div className="info">
                                <h1 id="team-card-head">{item.name}</h1>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    );
                })
            }
            
        </div>
    );


    }