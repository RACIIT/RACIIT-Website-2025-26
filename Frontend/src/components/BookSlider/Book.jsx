import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="book-container">
      <iframe
        src="/AnnualReport.pdf"  // PDF in public folder
        title="Annual Report"
        width="100%"
        height="800px"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>
    </div>
  );
};

export default Book;
