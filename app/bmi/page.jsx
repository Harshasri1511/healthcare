"use client";
import React, { useState } from 'react';

const ReportSelector = () => {
  // State to manage the selected value
  const [selectedReport, setSelectedReport] = useState("");

  // Handler for when the selection changes
  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  return (
    <select>
      {/* Placeholder option */}
      <option value="fszdcsdzf">
        Select the Report Type
      </option>
      {/* Other options */}
      <option value="Blood pressure">Blood pressure</option>
      <option value="Blood Sugar">Blood Sugar</option>
      <option value="Genetic Report">Genetic Report</option>
      <option value="Hormonals Profile">Hormonals Profile</option>
    </select>
  );
};

export default ReportSelector;