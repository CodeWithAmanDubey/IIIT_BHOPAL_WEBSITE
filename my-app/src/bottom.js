import React from 'react';
import './bottom.css'; // Import your CSS file
import a1 from "../src/assest/a1.png";
import a2 from "../src/assest/a2.png";
import a3 from "../src/assest/a3.png";
import a4 from "../src/assest/a4.png";
import a5 from "../src/assest/a5.png";
import a6 from "../src/assest/a6.png";
import a7 from "../src/assest/a7.png";
import a8 from "../src/assest/a8.png";
import a9 from "../src/assest/a9.png";
import imagewa from "../src/assest/imagewa.jpg";
import iconwa from "../src/assest/iconwa.jpg";

import { FaSchool, FaLinkedin, FaInstagram, FaTwitter, FaFacebookF, FaSearch, FaArrowCircleRight, FaPhotoVideo, FaGraduationCap, FaPeopleArrows, FaBookOpen } from 'react-icons/fa';

function Bottom() {
  return (
    <>
      <div className="text-box">
        <h2>Our Recruiters</h2>
      </div>
      <div className="image-pro">
        <img src={a1} alt="Recruiter 1" />
        <img src={a2} alt="Recruiter 2" />
        <img src={a3} alt="Recruiter 3" />
        <img src={a4} alt="Recruiter 4" />
        <img src={a5} alt="Recruiter 5" />
        <img src={a6} alt="Recruiter 6" />
        <img src={a7} alt="Recruiter 7" />
        <img src={a8} alt="Recruiter 8" />
        <img src={a9} alt="Recruiter 9" />

      </div>

      <div className="text-box">
        <h2>Academic Information Desk</h2>
      </div>

      <div className="cont">
        <div className="itm">
          <div className="icn">
            <FaSchool size={30} />
          </div>
          <div className="text">ACADEMIC</div>
        </div>
        <div className="itm">
          <div className="icn">
            <FaGraduationCap size={30} />
          </div>
          <div className="txt">PROGRAMES</div>
        </div>
        <div className="itm">
          <div className="icn">
            <FaPeopleArrows size={30} />
          </div>
          <div className="txt">FACULTY</div>
        </div>
        <div className="itm">
          <div className="icn">
            <FaBookOpen size={30} />
          </div>
          <div className="txt">ADMISSION</div>
        </div>
      </div>

      <div className="prop">
        <div className="menu left">
          <div className="iconss">
            <FaPhotoVideo size={30} />
          </div>
          <div className="textss"><h2>photo gallery</h2></div>
        </div>
        <div className="menu right">
          <div className="iconss">
            < FaArrowCircleRight size={30} />
          </div>
          <div className="textss"><h2>press and media</h2></div>
        </div>
      </div>

      <div className="boxing">
        <div className="vertical-line"></div>
        <div className="image-containerss leftss">
          <img src={imagewa} alt="Left" className="imagewa" />
          <div className="iconwa">
            <FaSearch size={30} />
          </div>
        </div>
        <div className="image-containerss rightss">
          <img src={iconwa} alt="Right" className="imagewa" />
          <div className="iconwa">
            <FaSearch size={30} />
          </div>
        </div>
      </div>


      <div className="parent-contain">
        {/* Child Div 1 */}
        <div className="child-divi">
          <h2>Contact Us</h2>
          <p>C/O Maulana Azad National Institute of Technology (MANIT), Bhopal, Room No TB-201, First Floor, New Teaching Block, MANIT, Bhopal, MP, India - 462003</p>
          <p>0755-4051950</p>
          <p>info@iiitbhopal.ac.in</p>
        </div>

        {/* Child Div 2 */}
        <div className="child-divi">
          <h2>Important links</h2>
          <p>SCHLORSHIP</p>
          <p>T&O CELL</p>
          <p>UG PG PROGRAMME</p>
          <p>ADMISSION</p>
        </div>

        {/* Child Div 3 */}
        <div className="child-divi">
          <h2>Useful links</h2>
          <p>NOTICE</p>
          <p>VISION & MISION</p>
          <p>CONTACT US</p>
        </div>

        {/* Child Div 4 */}
        <div className="child-divi">
          <h2>Follow US</h2>
          <div className="icons-rowa">
            <FaFacebookF size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>

      </div>

      <div className="part">
        <div className="childo left-childo">© 2023-24 IIIT Bhopal. All Rights Reserved.</div>
        <div className="childo right-childo">Privacy Policy | Terms & Condition</div>
      </div>
    </>
  );

}

export default Bottom;
