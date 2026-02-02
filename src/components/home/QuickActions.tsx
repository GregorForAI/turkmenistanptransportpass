import { History, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <button
        onClick={() => navigate("/history")}
        className="action-btn"
        aria-label="История операций"
      >
        <History className="w-8 h-8 text-primary" />
        <span className="text-sm font-medium text-foreground">История</span>
      </button>
      <button
        onClick={() => navigate("/qr-payment")}
        className="action-btn"
        aria-label="Оплата по QR"
      >
        <QrCode className="w-8 h-8 text-primary" />
        <span className="text-sm font-medium text-foreground">Оплата по QR</span>
      </button>
    </div>
  );
};
