import React from "react";
import GalleryItem from "./GalleryItem";
import image from "../../../assets/slider_image.svg";

const ImageGallery = () => {
  return (
    <div className="space-y-10 md:space-y-6 lg:space-y-10">
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-6 lg:gap-10 justify-between">
        <GalleryItem
          src={image}
          text="Image 1"
          style="w-full md:w-[50%] lg:w-[35%]"
        />
        <GalleryItem
          src={image}
          text="Image 2"
          style="w-full md:w-[50%] lg:w-[65%]"
        />
      </div>
      <div className="flex gap-10 justify-between">
        <GalleryItem src={image} text="Image 3" style="w-[100%]" />
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-6 lg:gap-10 justify-between">
        <GalleryItem src={image} text="Image 4" style="w-full md:w-[50%]" />
        <GalleryItem src={image} text="Image 5" style="w-full md:w-[50%]" />
      </div>
    </div>
  );
};

export default ImageGallery;

{
  /* <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <GalleryItem src={image} text="Image 1" />
          </div>
          <div className="col-span-1">
            <GalleryItem src={image} text="Image 2" />
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <GalleryItem src={image} text="Image 3" />
      </div>
      <div className="col-span-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <GalleryItem src={image} text="Image 4" />
          </div>
          <div className="col-span-1">
            <GalleryItem src={image} text="Image 5" />
          </div>
        </div>
      </div>
    </div> */
}
