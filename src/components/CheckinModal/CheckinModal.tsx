// CheckinModal.tsx
import React, { useState } from "react";
import "./CheckinModal.css";

export interface CheckinFormData {
  mood: number;
  sleep: number;
  energy: number;
  medication: "taken" | "skipped" | null;
}

interface CheckinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CheckinFormData) => void;
}

const CheckinModal: React.FC<CheckinModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [mood, setMood] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [medication, setMedication] = useState<"taken" | "skipped" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ mood, sleep, energy, medication });
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="checkin-modal-overlay" onClick={handleOverlayClick}>
      <div className="checkin-modal">
        <button className="checkin-modal-close" onClick={onClose}>×</button>
        <h2 className="checkin-modal-title">Today's Check-in</h2>

        {[
          { label: "Mood", value: mood, setter: setMood },
          { label: "Sleep", value: sleep, setter: setSleep },
          { label: "Energy", value: energy, setter: setEnergy },
        ].map(({ label, value, setter }) => (
          <div className="checkin-modal-field" key={label}>
            <div className="checkin-modal-label">
              <span>{label}</span>
              <span className="checkin-modal-label-value">{value} / 10</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={value}
              onChange={(e) => setter(Number(e.target.value))}
              className="checkin-modal-slider"
            />
          </div>
        ))}

        <div className="checkin-modal-field">
          <span className="checkin-modal-medication-label">Medication</span>
          <div className="checkin-modal-medication-options">
            {(["taken", "skipped"] as const).map((option) => (
              <button
                key={option}
                className={`checkin-modal-medication-option${medication === option ? " selected" : ""}`}
                onClick={() => setMedication(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button className="checkin-modal-submit" onClick={handleSubmit}>
          Save Today's Check-in
        </button>
      </div>
    </div>
  );
};

export default CheckinModal;