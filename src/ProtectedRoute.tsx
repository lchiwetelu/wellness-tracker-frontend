import { Navigate } from "react-router";
import { useAuth } from "./context/AuthContext";
import type { JSX } from "react";


export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; //todo: change the loading here to a loader

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}