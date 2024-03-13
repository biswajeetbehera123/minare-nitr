import  { default as image1 } from './1.jpeg';
import  { default as image2 } from './2.jpeg';
import  { default as image3 } from './3.jpeg';
import  { default as image4 } from './4.jpeg';
import  { default as image5 } from './5.jpeg';
import  { default as image6 } from './6.jpg';
import  { default as image7 } from './7.jpg';
import  { default as image8 } from './8.jpg';
import  { default as image9 } from './9.jpg';
import  { default as image10 } from './10.JPG';
import  { default as image11 } from './11.JPG';
import  { default as image12 } from './12.JPG';
import  { default as image13 } from './13.JPG';
import  { default as image14 } from './14.JPG';
import  { default as image15 } from './15.JPG';
import  { default as image16 } from './16.JPG';
import  { default as image17 } from './17.JPG';
import  { default as image18 } from './18.jpeg';
import  { default as image19 } from './19.JPG';
import  { default as image20 } from './20.JPG';
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const photos = [
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316876/Gallery/ay6ncxfsd1nzogxk6etc.jpg", width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314836/Gallery/yvfewuredr7xgx6y7i5i.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316856/Gallery/ye6hynoiwvsdrqsgwetz.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316856/Gallery/ime4i6gxpeuk4lnj9kub.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316855/Gallery/krmweaqwjdkbveonywzi.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316855/Gallery/xg0yfivaofexuwniwjef.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316849/Gallery/gvcksmlmrdhkmox2f1pf.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316847/Gallery/cuatl9psff0lcn9qwgrd.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314894/Gallery/gzzti5bclucqipkf6iat.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314874/Gallery/clyrnrt7fzwchldeddve.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314840/Gallery/rzktpf4edmascblcrfhw.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314838/Gallery/rzgxvzww7bejisr4nvk0.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314838/Gallery/xchrfhuufrv7ncqlb58v.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314838/Gallery/vgrszdjgv87djr7ykxux.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314837/Gallery/euagyifcmdeb9dvze2ph.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314837/Gallery/k6v3df1i0m0saz28j9zm.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710314836/Gallery/en11ivghyoi1ppxtxs5h.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316869/Gallery/z2gpznoeh2zhxfreci09.jpg",width: 1350, height: 950 },
        { src: "https://res.cloudinary.com/desyzom9w/image/upload/v1710316847/Gallery/xy9goloxjmycflq7pf1e.jpg",width: 1350, height: 950 },
        
    ];


    export const  photoarr =photos.map((photo) => ({
        src: photo.src,
        width: photo.width,
        height: photo.height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.src,
                width: breakpoint,
                height,
            };
        }),
    }));