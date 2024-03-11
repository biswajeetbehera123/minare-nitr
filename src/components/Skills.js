import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import im1 from "../assets/img/im1.png";
import image5 from "../assets/img/image 5.png";
import image6 from "../assets/img/image 6.png";
import image8 from "../assets/img/image 8.png";
import image3 from "../assets/img/image 3.png";
import im2 from "../assets/img/im2.png";
import im3 from "../assets/img/im3.jpg";
import image4 from "../assets/img/image 4.png";


import R from "../assets/img/R.png";
import JSW from "../assets/img/JSW.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Sponsors</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                                <img src={im1} alt="Image" />
                                <h5>OMC</h5>
                            </div>
                            <div className="item">
                                <img src={image5} alt="Image" />
                                <h5>MCL</h5>
                            </div>
                            <div className="item">
                                <img src={R} alt="Image" />
                                <h5>RC RUNGTA GROUP</h5>
                            </div>
                            <div className="item">
                                <img src={image8} alt="Image" />
                                <h5>JSW</h5>
                            </div>
                            
                            <div className="item">
                            <img src={im2} alt="Image" />
                                <h5>SMARTCHEM</h5>
                            </div>
                            <div className="item">
                            <img src={image4} alt="Image" />
                                <h5>IMFA</h5>
                            </div>
                            <div className="item">
                            <img src={im3} alt="Image" />
                                <h5>moil</h5>
                            </div>
                                </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}