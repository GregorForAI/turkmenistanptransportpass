import { ReactNode } from "react";
import { AppHeader } from "./AppHeader";
import { BottomNav } from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  hasNewNotifications?: boolean;
  hideBottomNav?: boolean;
}

export const AppLayout = ({
  children,
  title,
  showBack = true,
  showNotifications = true,
  hasNewNotifications = true,
  hideBottomNav = false,
}: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <AppHeader
        title={title}
        showBack={showBack}
        showNotifications={showNotifications}
        hasNewNotifications={hasNewNotifications}
      />
      <main className="flex-1 overflow-y-auto pb-24">{children}</main>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
};
