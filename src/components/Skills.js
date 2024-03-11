
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151138/minare/im1_yjh1pv.png"} alt="Image" />
                                <h5>OMC</h5>
                            </div>
                            <div className="item">
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151428/minare/image_5_yzikr4.png"} alt="Image" />
                                <h5>MCL</h5>
                            </div>
                            <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710171161/minare/image_17_blionc.png"} alt="Image" />
                                <h5>ALTERADE</h5>
                            </div>
                             <div className="item">
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151240/minare/JSW_uavz85.png"} alt="Image" />
                                <h5>JSW</h5>
                            </div>
                            <div className="item">
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151255/minare/R_zsvmzk.png"} alt="Image" />
                                <h5>RC RUNGTA GROUP</h5>
                            </div>
                            <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151564/minare/ucil_gifzvz.jpg"} alt="Image" />
                                <h5>UCIL</h5>
                            </div>
                            <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710171195/minare/SAIL_Logo.svg_qo06ba.png"} alt="Image" />
                                <h5>SAIL</h5>
                            </div>
                            <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151151/minare/im2_zwpdx6.png"} alt="Image" />
                                <h5>SMARTCHEM</h5>
                            </div>
                            <div className="item">
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710171181/minare/image_20_urz7vl.png"} alt="Image" />
                                <h5>OCL</h5>
                                </div>
                            <div className="item">
                                <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151213/minare/image_3_ivc8wj.png"} alt="Image" />
                                <h5>OCPL</h5>
                                </div>
                                <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151194/minare/im3_kokoeu.jpg"} alt="Image" />
                                <h5>MOIL</h5>
                            </div>
                            <div className="item">
                            <img src={"https://res.cloudinary.com/daho6qhd0/image/upload/v1710151378/minare/image_4_qhx2kn.png"} alt="Image" />
                                <h5>IMFA</h5>
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