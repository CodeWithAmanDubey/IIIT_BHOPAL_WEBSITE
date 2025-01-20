import React from 'react';
import './highlight.css';
import page1 from "../src/assest/page1.jpg";
const ImageFullWidth = () => {
  return (
    <div className="container9">
      {/* Title */}
      <h1 className="title9">Highlights</h1>

      {/* Paragraph */}
      <p className="paragraph9">
      7th International Conference on Recent Trends in Image Processing & Pattern Recognition (RTIP2R 2024) 19-20 December 2024 at IIIT Bhopal in collaboration with MANIT & 2AI: Applied AI Research Lab - University of South Dakota (USA) 
      </p>

      {/* Full-Width Image */}
      <div className="image-container9">
        <img
          src={page1}
          alt="Full Width Example"
          className="full-width-image"
        />
      </div>
    </div>
  );
};

export default ImageFullWidth;
