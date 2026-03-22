
export default function OverviewSection() {
  return (
    <div className="overview-section">
      <h2>Your 7 day overview</h2>
      <div className="overview-cards">
        <OverviewCard title="Mood Trends" />
        <OverviewCard title="Sleep Patterns" />
        <OverviewCard title="Energy and Medication" />
      </div>
      <span><a href="/">See Full Overview</a></span>
    </div>
  );
}

function OverviewCard({ title }: {title: string}) {
  return (
    <div className="overview-card">
      <div className="chart-placeholder"></div>
      <p>{title}</p>
    </div>
  );
}