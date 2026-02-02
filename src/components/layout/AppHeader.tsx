import { ChevronLeft, Bell } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  hasNewNotifications?: boolean;
}

export const AppHeader = ({
  title,
  showBack = true,
  showNotifications = true,
  hasNewNotifications = true,
}: AppHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border safe-area-top">
      <div className="flex items-center justify-between h-14 px-4">
        {/* Back button */}
        <div className="w-12">
          {showBack && !isHome && (
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-secondary transition-colors"
              aria-label="Назад"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}
        </div>

        {/* Title */}
        <h1 className="text-lg font-semibold text-foreground text-center flex-1 truncate">
          {title}
        </h1>

        {/* Notifications */}
        <div className="w-12 flex justify-end">
          {showNotifications && (
            <button
              onClick={() => navigate("/notifications")}
              className="relative flex items-center justify-center w-10 h-10 -mr-2 rounded-full active:bg-secondary transition-colors"
              aria-label="Уведомления"
            >
              <Bell className="w-5 h-5 text-foreground" />
              {hasNewNotifications && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-destructive rounded-full" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
