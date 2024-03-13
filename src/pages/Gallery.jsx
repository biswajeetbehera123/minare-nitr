import React from "react";
import { PhotoAlbum } from "react-photo-album";
import { photoarr } from "../assets/gallery";

export const Gallery = () => {
    return (
        <section id="gallery">
            <div className="bg-gray-200">
                {/* <div className="container mx-auto px-4 py-10"></div> */}
                <div className="container lg:px-8 lg:block mx-auto  hidden py-5">
                    <PhotoAlbum
                        layout="columns"
                        photos={photoarr}
                        columns={3}
                        className="rounded-md"
                        padding={11}
                        defaultContainerWidth={100}
                        spacing={15}
                        targetRowHeight={200}
                        breakpoints={[300, 600, 1200]}
                    />
                </div>
                {/* <div className="container md:hidden block py-5">
                    <PhotoAlbum
                        layout="columns"
                        photos={photoarr}
                        columns={1}
                        className="px-2"
                        padding={11}
                        defaultContainerWidth={100}
                        spacing={15}
                        targetRowHeight={200}
                        breakpoints={[300, 600, 1200]}
                    />
                </div>
                <div className="container hidden md:block lg:hidden py-5">
                    <PhotoAlbum
                        layout="columns"
                        photos={photoarr}
                        columns={2}
                        className="px-2"
                        padding={11}
                        defaultContainerWidth={100}
                        spacing={15}
                        targetRowHeight={200}
                        breakpoints={[300, 600, 1200]}
                    />
                </div> */}
            </div>
        </section>
    );
};