import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import StudentDashboardPage from "@/features/student/pages/StudentDashboardPage";
import MyClassesPage from "@/features/student/pages/MyClassesPage";
import AssignmentsPage from "@/features/student/pages/AssignmentsPage";
import SchedulePage from "@/features/student/pages/SchedulePage";

// When Clerk isn't configured, auth routes redirect to the dashboard so the
// preview works without any backend setup.
const CLERK_ENABLED = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student/dashboard" replace />} />
      <Route
        path="/login"
        element={
          CLERK_ENABLED ? (
            <LoginPage />
          ) : (
            <Navigate to="/student/dashboard" replace />
          )
        }
      />
      <Route
        path="/register"
        element={
          CLERK_ENABLED ? (
            <RegisterPage />
          ) : (
            <Navigate to="/student/dashboard" replace />
          )
        }
      />
      <Route path="/student/dashboard" element={<StudentDashboardPage />} />
      <Route path="/student/classes" element={<MyClassesPage />} />
      <Route path="/student/assignments" element={<AssignmentsPage />} />
      <Route path="/student/schedule" element={<SchedulePage />} />
      <Route
        path="/forgot-password"
        element={
          <div className="flex min-h-screen items-center justify-center p-8 text-center text-ink-700">
            Forgot password page — coming soon.
          </div>
        }
      />
      <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
    </Routes>
  );
}
