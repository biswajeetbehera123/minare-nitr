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
import  { default as image21 } from './20.JPG';
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

export const photos = [
        { src: image1, width: 1080, height: 1440 },
        { src: image2,width: 1080, height: 1620 },
        { src: image9,width: 1080, height: 681 },
        { src: image3,width: 1080, height: 1350 },
        { src: image4,width: 1080, height: 1350 },
        { src: image5,width: 1080, height: 1350 },
        { src: image6,width: 1080, height: 1350 },
        { src: image7,width: 1080, height: 1350 },
        { src: image10,width: 1080, height: 681 },
        { src: image11,width: 1080, height: 1350 },
        { src: image12,width: 1080, height: 1350 },
        { src: image8,width: 1080, height: 681 },
        { src: image13,width: 1080, height: 1350 },
        { src: image14,width: 1080, height: 1350 },
        { src: image15,width: 1080, height: 1350 },
        { src: image16,width: 1080, height: 1350 },
        { src: image17,width: 1080, height: 1350 },
        { src: image18,width: 1080, height: 1350 },
        { src: image19,width: 1080, height: 1350 },
        { src: image21,width: 1080, height: 1350 },

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