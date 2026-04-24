import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Star,
  CalendarDays,
  HelpCircle,
  LogOut,
  Lightbulb,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  to: string;
};

const items: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/student/dashboard" },
  { label: "My Courses", icon: BookOpen, to: "/student/classes" },
  { label: "Assignments", icon: ClipboardList, to: "/student/assignments" },
  { label: "Grades", icon: Star, to: "/student/grades" },
  { label: "Schedule", icon: CalendarDays, to: "/student/schedule" },
];

/**
 * Left sidebar: portal header, primary navigation, upgrade CTA, and footer links.
 */
export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[240px] shrink-0 flex-col border-r border-ink-200 bg-white px-4 py-5 md:flex">
      {/* Portal header */}
      <div className="flex items-center gap-3 px-2 pb-5">
        <span className="flex size-10 items-center justify-center rounded-full bg-amber-100">
          <Lightbulb className="size-5 text-amber-500" aria-hidden />
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-ink-900">Student Portal</div>
          <div className="text-xs text-ink-500">Grade 10 · Section A</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {items.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-lg bg-brand px-3 py-2.5 text-sm font-medium text-white shadow-card"
                : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 transition hover:bg-ink-100"
            }
          >
            <Icon className="size-[18px]" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Spacer + upgrade */}
      <div className="mt-auto flex flex-col gap-2">
        <button
          type="button"
          className="mb-2 w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-brand-600"
        >
          Upgrade Plan
        </button>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-100"
        >
          <HelpCircle className="size-[18px]" aria-hidden />
          Help Center
        </a>
        <a
          href="/login"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-100"
        >
          <LogOut className="size-[18px]" aria-hidden />
          Logout
        </a>
      </div>
    </aside>
  );
}
