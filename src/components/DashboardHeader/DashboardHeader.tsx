
interface DashboardHeaderProps {
    userEmail: string
}

export default function DashboardHeader({userEmail} : DashboardHeaderProps) {
  return (
    <div className="dashboard-header">
      <h1>Your Daily Wellness & Checkin</h1>
      <div className="user-greeting">
        <div className="avatar"></div>
        <span>Hello {userEmail}</span>
      </div>
    </div>
  );
}