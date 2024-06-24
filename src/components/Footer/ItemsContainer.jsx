import React from "react";
import Item from "./Item";
import { LINKS, RESOURCES, SUPPORT } from "./Menus";
import image from "../../assets/2.jpg"; // Import the image

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:px-11 px-3 py-16">
      <div className="col-span-1 sm:col-span-1 lg:col-span-1 flex justify-center  mb-8 sm:mb-2 ml-0 sm:ml-12"> {/* Adjusted ml value */}
        <img src={image} alt="Descriptive alt text" className="w-48 h-auto object-cover rounded-lg shadow-md" />
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-1">
        <Item Links={LINKS} title="Useful Links" />
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-1">
        <Item Links={RESOURCES} title="Resources" />
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-1">
        <Item Links={SUPPORT} title="Get To Know Us" />
      </div>
    </div>
  );
};

export default ItemsContainer;

