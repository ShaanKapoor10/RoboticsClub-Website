import React from "react";

const Item = ({ Links, title }) => {
  return (
    <div className="flex flex-col items-center">
      <h1
        className="mb-1 font-semibold"
        style={{ writingMode: "vertical-rb"}}
      >
        {title}
      </h1>
      <ul className="flex flex-col items-center" style={{ writingMode: "vertical-rb"}}>
        {Links.map((link) => (
          <li
            key={link.name}
            style={{ writingMode: "vertical-rb"}}
          >
            <a
              className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
