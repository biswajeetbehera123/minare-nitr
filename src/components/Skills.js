import meter1 from "../assets/sponsors/1.jpg";
import meter2 from "../assets/sponsors/2.jpg";
import meter3 from "../assets/sponsors/3.png";
import meter4 from "../assets/sponsors/4.png";
import meter5 from "../assets/sponsors/5.png";
import meter6 from "../assets/sponsors/6.png";
import meter7 from "../assets/sponsors/7.png";
import meter8 from "../assets/sponsors/8.png";
import meter9 from "../assets/sponsors/9.png";
import meter10 from "../assets/sponsors/10.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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
                                <img src={meter1} alt="Image" />
                                <h5>OMC</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>SmartChem Technologies Ltd</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>OCPL</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>IMFA</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>MCL</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>RC Rungta Group</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>SBI</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>JSW</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>MOIL Limited</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Adani Group</h5>
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