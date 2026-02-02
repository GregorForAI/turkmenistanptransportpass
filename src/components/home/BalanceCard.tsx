import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BalanceCardProps {
  balance: number;
}

export const BalanceCard = ({ balance }: BalanceCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="balance-card animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-80 mb-1">Ваш баланс</p>
          <p className="text-3xl font-bold tracking-tight">
            {balance.toLocaleString("ru-RU")} <span className="text-xl">TMT</span>
          </p>
        </div>
        <button
          onClick={() => navigate("/topup")}
          className="flex items-center gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground px-4 py-2 rounded-xl font-medium transition-colors active:scale-95"
          aria-label="Пополнить баланс"
        >
          <Plus className="w-5 h-5" />
          <span>Пополнить</span>
        </button>
      </div>
    </div>
  );
};
