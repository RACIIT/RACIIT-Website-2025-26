import React from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import Book from "./BookSlider/Book"; 
import "./AnnualReport1.css";

const AnnualReport1 = () => {
  return (
    <div className="annual-report-page">
      <Navbar />
      <main className="annual-report-content">
        <Book pdfFile="/AnnualReport.pdf" />
      </main>
      <Footer />
    </div>
  );
};

export default AnnualReport1;
