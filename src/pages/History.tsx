import { useState } from "react";
import { Calendar, ArrowUpCircle, ArrowDownCircle, ChevronRight } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type FilterType = "all" | "income" | "expense";

interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  date: string;
  time: string;
  description: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "expense",
    amount: 15.00,
    date: "15 января 2024",
    time: "14:32",
    description: "Платная дорога M-1",
  },
  {
    id: "2",
    type: "income",
    amount: 100.00,
    date: "14 января 2024",
    time: "10:15",
    description: "Пополнение картой",
  },
  {
    id: "3",
    type: "expense",
    amount: 2.50,
    date: "13 января 2024",
    time: "08:45",
    description: "Автобус маршрут 15",
  },
  {
    id: "4",
    type: "expense",
    amount: 25.00,
    date: "12 января 2024",
    time: "16:20",
    description: "Платная дорога M-3",
  },
  {
    id: "5",
    type: "income",
    amount: 50.00,
    date: "10 января 2024",
    time: "12:00",
    description: "Скретч-карта",
  },
];

const History = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredTransactions = mockTransactions.filter((t) => {
    if (filter === "all") return true;
    return t.type === filter;
  });

  const handleTransactionClick = (transaction: Transaction) => {
    navigate(`/transaction/${transaction.id}`, {
      state: { transaction },
    });
  };

  return (
    <AppLayout title="История операций">
      <div className="p-4 space-y-4">
        {/* Filters */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={cn("filter-pill", filter === "all" && "active")}
            >
              Все
            </button>
            <button
              onClick={() => setFilter("income")}
              className={cn("filter-pill", filter === "income" && "active")}
            >
              Пополнения
            </button>
            <button
              onClick={() => setFilter("expense")}
              className={cn("filter-pill", filter === "expense" && "active")}
            >
              Списания
            </button>
          </div>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary active:bg-secondary/70 transition-colors"
            aria-label="Фильтр по дате"
          >
            <Calendar className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Transactions list */}
        {filteredTransactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <ArrowUpCircle className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-base font-medium text-foreground mb-1">
              Нет операций
            </p>
            <p className="text-sm text-muted-foreground">
              Здесь появится история ваших транзакций
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredTransactions.map((transaction, index) => (
              <button
                key={transaction.id}
                onClick={() => handleTransactionClick(transaction)}
                className="transaction-item w-full animate-fade-in active:scale-98 transition-transform"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      transaction.type === "income"
                        ? "bg-success/10"
                        : "bg-destructive/10"
                    )}
                  >
                    {transaction.type === "income" ? (
                      <ArrowDownCircle className="w-5 h-5 text-success" />
                    ) : (
                      <ArrowUpCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.date}, {transaction.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-base font-semibold",
                      transaction.type === "income"
                        ? "text-success"
                        : "text-foreground"
                    )}
                  >
                    {transaction.type === "income" ? "+" : "−"}
                    {transaction.amount.toFixed(2)} TMT
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default History;
