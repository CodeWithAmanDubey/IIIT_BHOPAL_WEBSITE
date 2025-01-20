import React from "react";
import "./notice.css";
import others from "../src/assest/other.jpg";




const App = () => {

    const headings=[
        " Notice",
       "Tender",
       " Events and Programs",
       "Research and Publication",
      "News and Updates",
      "Other Highlights",
      ]
      
      const linesData = [
      ["Walk-in interview for the post of JRF at IIIT Bhopal under Divyasampark iHub", "Academic calendar for even semester session 2024-25", "Advertisement for Walk in Interview for Lab Assistant - January 2025", "Notice for the Third Round of Rolling Advertisements for the Position of Assistant Professor (Grade II), Level-10 (Q3) 2024 ", "Schedule for Even Semesters End Term Supplementary Examination December 2024 ", "Registration Notice for Even Semester (2nd, 4th, 6th and 8th) Semester - January 2025 "],
      ["Tender for Hiring of Buses on Monthly Rental Basis (Dec 2024)", "Cancellation Notice of Tender for Manpower Outsource Agency ", "Notice for Tender Cancellation of Hiring Building for Hostel Facility to Students (Boys and Girls) 2024", "Tender for Partition Work in Classrooms", "Corrigendum on Tender for Hiring Building for Hostel Facility to Students (Boys and Girls) 2024 ", "Corrigendum on Tender to Purchase of Desktop Computers 2024 "],
      ["Tender for Hiring of Buses on Monthly Rental Basis (Dec 2024)", "Cancellation Notice of Tender for Manpower Outsource Agency ", "Notice for Tender Cancellation of Hiring Building for Hostel Facility to Students (Boys and Girls) 2024", "Tender for Partition Work in Classrooms", "Corrigendum on Tender for Hiring Building for Hostel Facility to Students (Boys and Girls) 2024 ", "Corrigendum on Tender to Purchase of Desktop Computers 2024 "],
      ["Walk-in interview for the post of JRF at IIIT Bhopal under Divyasampark iHub", "Academic calendar for even semester session 2024-25", "Advertisement for Walk in Interview for Lab Assistant - January 2025", "Notice for the Third Round of Rolling Advertisements for the Position of Assistant Professor (Grade II), Level-10 (Q3) 2024 ", "Schedule for Even Semesters End Term Supplementary Examination December 2024 ", "Registration Notice for Even Semester (2nd, 4th, 6th and 8th) Semester - January 2025 "],
      ["Tender for Hiring of Buses on Monthly Rental Basis (Dec 2024)", "Cancellation Notice of Tender for Manpower Outsource Agency ", "Notice for Tender Cancellation of Hiring Building for Hostel Facility to Students (Boys and Girls) 2024", "Tender for Partition Work in Classrooms", "Corrigendum on Tender for Hiring Building for Hostel Facility to Students (Boys and Girls) 2024 ", "Corrigendum on Tender to Purchase of Desktop Computers 2024 "],
      ];
    
  return (
    <div className="container">
      {headings.map((heading, index) => (
        <div key={index} className="child">
          <h3 id={`heading-${index + 1}`}>{heading}</h3>
          <div className="lines">
            {index === 5 ? (
              <img src={others} alt="Other Highlights" className="system" />
            ) : (
              Array.isArray(linesData[index]) &&
              linesData[index].map((line, lineIndex) => (
                <p key={lineIndex} className="line">
                  {line}
                </p>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;