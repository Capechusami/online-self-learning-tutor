import { CalendarDays } from "lucide-react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { OverallProgressCard } from "../components/OverallProgressCard";
import { UpNextCard } from "../components/UpNextCard";
import { LearningPathCard } from "../components/LearningPathCard";
import { CurrentCoursesCard } from "../components/CurrentCoursesCard";
import { RecentGradesCard } from "../components/RecentGradesCard";
import { UpcomingTasksPanel } from "../components/UpcomingTasksPanel";
import { EncouragementCard } from "../components/EncouragementCard";

/**
 * StudentDashboardPage — the Grade 10 student dashboard.
 * Layout: fixed left sidebar, top app bar, 2-column main grid (content + tasks).
 */
export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen bg-surface-page font-sans text-ink-900">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="mx-auto w-full max-w-[1200px] flex-1 px-8 pb-10 pt-6">
          {/* Welcome header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-ink-900">
                Welcome back,{" "}
                <span className="text-brand">Elias</span>{" "}
                <span aria-hidden>👋</span>
              </h1>
              <p className="mt-1 text-sm text-ink-500">
                Ready to conquer Grade 10 today? You have 2 assignments due.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-card transition hover:bg-ink-50"
            >
              <CalendarDays className="size-4" aria-hidden />
              View Schedule
            </button>
          </div>

          {/* Two-column content grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            {/* Main column */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <OverallProgressCard />
                <UpNextCard />
              </div>

              <LearningPathCard />
              <CurrentCoursesCard />
              <RecentGradesCard />
            </div>

            {/* Right column */}
            <aside className="flex flex-col gap-6">
              <UpcomingTasksPanel />
              <EncouragementCard />
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
