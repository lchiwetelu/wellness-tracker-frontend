import { Route, Routes } from "react-router"
import Dashboard from "./Dashboard"
import NewCheckin from "./NewCheckin"
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>} />
        <Route path="new-checkin" element={<NewCheckin />} />
      </Routes>
    
    </>
  )
}

export default App
