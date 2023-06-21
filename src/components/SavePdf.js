import React, { useRef } from "react";
import jsPDF from "jspdf";
import Pdf from "./Pdf";

function App() {
  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px"
    });

    // Adding the fonts

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      }
    });
  };

  return (
    <div>
      <div className="btn-download-pdf" onClick={handleGeneratePdf}>
					<i className='bx bxs-cloud-download' ></i>
					<span className="text">Download PDF</span>
				</div>
      <div ref={reportTemplateRef}>
        <Pdf />
      </div>
    </div>
  );
}

export default App;
