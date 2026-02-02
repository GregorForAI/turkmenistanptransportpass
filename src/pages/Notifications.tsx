import { AppLayout } from "@/components/layout/AppLayout";
import { Bell, CreditCard, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notification {
  id: string;
  type: "payment" | "warning" | "info";
  title: string;
  message: string;
  time: string;
  isNew: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "payment",
    title: "Списание 15.00 TMT",
    message: "Платная дорога M-1",
    time: "14:32",
    isNew: true,
  },
  {
    id: "2",
    type: "info",
    title: "Пополнение успешно",
    message: "На баланс зачислено 100.00 TMT",
    time: "Вчера",
    isNew: true,
  },
  {
    id: "3",
    type: "warning",
    title: "Низкий баланс",
    message: "На счёте менее 50 TMT. Пополните баланс для поездок.",
    time: "2 дня назад",
    isNew: false,
  },
];

const getIcon = (type: Notification["type"]) => {
  switch (type) {
    case "payment":
      return CreditCard;
    case "warning":
      return AlertTriangle;
    case "info":
      return Info;
    default:
      return Bell;
  }
};

const getIconColor = (type: Notification["type"]) => {
  switch (type) {
    case "payment":
      return "text-primary";
    case "warning":
      return "text-warning";
    case "info":
      return "text-success";
    default:
      return "text-muted-foreground";
  }
};

const Notifications = () => {
  if (mockNotifications.length === 0) {
    return (
      <AppLayout title="Уведомления" showNotifications={false}>
        <div className="flex flex-col items-center justify-center h-[60vh] p-4 text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
            <Bell className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-base font-medium text-foreground mb-1">
            Нет уведомлений
          </p>
          <p className="text-sm text-muted-foreground">
            Здесь появятся уведомления о ваших операциях
          </p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title="Уведомления" showNotifications={false}>
      <div className="p-4 space-y-3">
        {mockNotifications.map((notification, index) => {
          const Icon = getIcon(notification.type);
          const iconColor = getIconColor(notification.type);

          return (
            <div
              key={notification.id}
              className={cn(
                "bg-card rounded-xl border border-border p-4 animate-fade-in",
                notification.isNew && "border-l-4 border-l-primary"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className={cn("w-5 h-5", iconColor)} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium text-foreground">
                      {notification.title}
                    </p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {notification.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default Notifications;
