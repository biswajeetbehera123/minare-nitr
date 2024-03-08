import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export default function Teams(){

    const teamData = [
        {
            id : '1',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '2',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '3',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '4',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '5',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '6',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '7',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
       
        {
            id : '8',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '9',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '10',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '11',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
        },
        {
            id : '12',
            name: 'K Uma Maheshwar Rao',
            position: 'Director',
            imgurl: 'https://www.nitrkl.ac.in/assets/images/director.jpg'
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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