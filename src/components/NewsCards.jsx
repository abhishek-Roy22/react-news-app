import React from "react";

const NewsCards = ({ n }) => {
  return (
    <div className="w-80 rounded-lg shadow-lg flex flex-col bg-gradient-to-r bg-slate-800 overflow-hidden">
      <img className="w-full h-64 object-cover" src={n.urlToImage} alt="img" />
      <h1 className=" text-teal-500 m-3 p-2 text-left uppercase">{n.title}</h1>
      <p className="text-white py-2 px-4 text-left">{n.description}</p>
      <span className="text-white font-bold p-2">
        {new Date(n.publishedAt).toDateString()}
      </span>
    </div>
  );
};

export default NewsCards;
