// CheckinPrompt.tsx
import React from "react";
import "./CheckinPrompt.css";

interface CheckinPromptProps {
  date?: Date;
  onEnterDetails?: () => void;
}

const CheckinPrompt: React.FC<CheckinPromptProps> = ({
  date = new Date(),
  onEnterDetails,
}) => {
    
  const formatDate = (d: Date): string => {
    const day = d.getDate();
    const suffix =
      day % 10 === 1 && day !== 11 ? "st" :
      day % 10 === 2 && day !== 12 ? "nd" :
      day % 10 === 3 && day !== 13 ? "rd" : "th";
    const month = d.toLocaleString("default", { month: "long" });
    return `Today, ${day}${suffix} ${month} ${d.getFullYear()}`;
  };

  return (
    <div className="checkin-prompt-container">
      <p className="checkin-prompt-date">{formatDate(date)}</p>
      <button className="checkin-prompt-button" onClick={onEnterDetails}>
        Enter Details For Today
      </button>
    </div>
  );
};

export default CheckinPrompt;