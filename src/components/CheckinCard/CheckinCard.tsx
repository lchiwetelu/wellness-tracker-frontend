
export default function CheckinCard() {
  return (
    <div className="checkin-card">
      <h2>You've checked in today</h2>
      <div className="checkin-details">
        <p>Mood: 😊 4/5</p>
        <p>Sleep: 9 hours</p>
        <p>Medication taken: Yes</p>
        <p>Energy 3/5</p>
      </div>
      <div className="edit-btn">Edit</div>
    </div>
  );
}