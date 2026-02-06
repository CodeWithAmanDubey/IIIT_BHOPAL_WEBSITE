import React, { useState } from 'react';
import "./body.css";
import image1 from "../src/assest/image1.jpg"
import image2 from "../src/assest/image2.jpg"
import image3 from "../src/assest/image3.jpg"
import director from "../src/assest/Director1.png"
import white from "../src/assest/white.jpg"
import socialMedia from "../src/assest/socialMedia.jpg"
import ImageGrid from "../src/highlight";
import p1 from "../src/assest/p1.jpeg"
import p2 from "../src/assest/p2.jpeg"
import p3 from "../src/assest/p3.jpeg"
import App from "./notice.js";
const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,


  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (

    <>
      <div className="carousel-container">
        <div className="image-container">
          <img src={images[currentIndex]} alt={`carousel ${currentIndex}`} />
        </div>
        <div className="carousel">
          <button className="arrow" onClick={prevImage}>
            &#60;
          </button>
          <button className="arrow" onClick={nextImage}>
            &#62;
          </button>
        </div>
      </div>
      <div className='bodypart'>
        <div className="main-div">



          {/* First Div (70%) */}
          <div className="child-div first-div" >
            <div className="centered-text"><h2>Message From Director Desk</h2></div>
            <div className="content-container" style={{ backgroundImage: `url(${white})` }} >
              <img
                src={director}
                alt="Placeholder"
                className="content-image"
              />
              <div className="content-text">
                <p>Dr. Ashutosh Kumar Singh</p>
                <p>Director, IIIT Bhopal</p>
                <p>director@iiitbhopal.ac.in</p>
                <p>0755-4051951</p>
              </div>

            </div>


            <div className="paragraph-container">
              <p>
                The Indian Institute of Information Technology, Bhopal, established in 2017 as an Institute of National Importance through a not-for-profit Public Private Partnership with the Ministry of Education, Government of India, is dedicated to providing top-tier technical education. Our vision is to be a pioneer in generating new ideas and innovations in technology and science. Committed to excellence, we prepare students for leadership roles, fostering intellectual curiosity, critical thinking, and a passion for lifelong learning. Our interdisciplinary approach encourages collaboration between students and faculty to address complex social and research challenges. We continually update our curriculum to align with industry needs and actively engage with leading industries for real-world projects and internships. Holistic development is prioritized, emphasizing personal growth, leadership abilities, ethical values, and social responsibility. We aim to recruit distinguished faculty members, serving as mentors, and fostering an environment of continuous improvement and innovation. Collaboration with the broader community and industry partners is central to driving societal progress.
              </p>

            </div>


          </div>


          {/* Second Div (30%) */}
          <div className="child-div second-div">

            <div className="second-text"><h2>Social Media</h2></div>
            <img
              src={socialMedia}
              alt="Placeholder"
              className="content-media"
            />
          </div>
        </div>
        <ImageGrid />
        <div className="text-container">
          <div className="moving-text"> Faculty recruitment &nbsp;&nbsp;&nbsp;  Non-teaching recruitment</div>
        </div>

        <div className="image-container2">
          <div className="moving-images">
            <div className="image-wrapper">  <img src={p1} alt="Campus view 1" className="image" /> </div>
            <div className="image-wrapper">   <img src={p2} alt="Campus view 2" className="image" /> </div>
            <div className="image-wrapper">  <img src={p3} alt="Campus view 3" className="image" /> </div>
          </div>
        </div>
        <App />
      </div>



    </>

  );
};

export default ImageCarousel;
