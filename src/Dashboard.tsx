import CheckinCard from "./components/CheckinCard/CheckinCard";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import StreakList from "./components/StreakList/StreakList";
import { useAuth } from "./context/AuthContext";
import "./Dashboard.css"

const Dashboard = () => {
    const { user } = useAuth();
    const userEmail = user?.email || ""

    return (
        <div className="dashboard-container">
            <DashboardHeader userEmail={userEmail} />
                <div className="dashboard-main">
                    <CheckinCard />
                    <StreakList />
                    {/* <CheckinPrompt /> */}
                </div>
            <OverviewSection />
        </div>
    )
}

export default Dashboard