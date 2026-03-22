import { useState } from "react";
import CheckinCard from "./components/CheckinCard/CheckinCard";
import type { CheckinFormData } from "./components/CheckinModal/CheckinModal";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import StreakList from "./components/StreakList/StreakList";
import { useAuth } from "./context/AuthContext";
import "./Dashboard.css"
import CheckinModal from "./components/CheckinModal/CheckinModal";
import CheckinPrompt from "./components/CheckinPrompt/CheckinPrompt";

const Dashboard = () => {
    const { user } = useAuth();
    const userEmail = user?.email || ""


    const [modalOpen, setModalOpen] = useState(false);

    const handleCheckinSubmit = (data: CheckinFormData) => {
    console.log("Check-in data:", data);
    // save to your backend/state here
    };

    return (
        <div className="dashboard-container">
            <DashboardHeader userEmail={userEmail} />
                <div className="dashboard-main">
                    {/* <CheckinCard />
                    <StreakList /> */}
                    <CheckinPrompt date={new Date()} onEnterDetails={() => setModalOpen(true)} />
                    <CheckinModal
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                        onSubmit={handleCheckinSubmit}
                        />
                </div>
            <OverviewSection />
        </div>
    )
}

export default Dashboard