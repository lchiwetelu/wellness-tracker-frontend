import type React from "react";

export default function StreakList() {
  return (
    <div className="streak-list">
      <h2>Your Streak</h2>
      <StreakItem color="#ff5a5a">
        You have a 7 day streak of over 8 hours of sleep
      </StreakItem>
      <StreakItem color="#3399ff">
        You have a 12 day streak of taking Medication
      </StreakItem>
      <StreakItem color="#ffdd33">
        You have a 2 day streak of Mood greater than 3 😊
      </StreakItem>
    </div>
  );
}

function StreakItem({ color, children }: {color: string, children: React.ReactNode}) {
  return (
    <div className="streak-item">
      <div className="streak-color" style={{ backgroundColor: color }}></div>
      <p>{children}</p>
    </div>
  );
}