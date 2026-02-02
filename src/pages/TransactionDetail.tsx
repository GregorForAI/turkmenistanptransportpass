import { useLocation, useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { MapPin, Clock, CreditCard, Car, Bus, Route, AlertTriangle } from "lucide-react";

// Mock transaction details
const mockExpenseDetail = {
  id: "1",
  type: "expense" as const,
  amount: 15.00,
  date: "15 января 2024",
  time: "14:32",
  entryPoint: "КПП Ашхабад-1",
  exitPoint: "КПП Мары",
  tripType: "toll_road",
  roadNumber: "M-1",
  vehicleNumber: "N29 38 AG",
  paymentMethod: "NFC",
};

const mockIncomeDetail = {
  id: "2",
  type: "income" as const,
  amount: 100.00,
  date: "14 января 2024",
  time: "10:15",
  method: "Банковская карта",
  cardLast4: "4532",
};

const TransactionDetail = () => {
  const { id } = useParams();
  const location = useLocation();

  // In real app, fetch from API based on id
  const transaction = location.state?.transaction;
  const isExpense = transaction?.type === "expense" || id === "1";
  const detail = isExpense ? mockExpenseDetail : mockIncomeDetail;

  if (isExpense) {
    return (
      <AppLayout title="Детали списания">
        <div className="p-4 space-y-6">
          {/* Amount */}
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground mb-1">Списано</p>
            <p className="text-4xl font-bold text-foreground">
              {mockExpenseDetail.amount.toFixed(2)} <span className="text-2xl">TMT</span>
            </p>
          </div>

          {/* Date and time */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3 text-foreground">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Дата и время</p>
                <p className="font-medium">
                  {mockExpenseDetail.date}, {mockExpenseDetail.time}
                </p>
              </div>
            </div>
          </div>

          {/* Route info */}
          <div className="bg-card rounded-xl p-4 border border-border space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Точка въезда</p>
                <p className="font-medium text-foreground">{mockExpenseDetail.entryPoint}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-destructive mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Точка выезда</p>
                <p className="font-medium text-foreground">{mockExpenseDetail.exitPoint}</p>
              </div>
            </div>
          </div>

          {/* Trip type */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <Route className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Тип поездки</p>
                <p className="font-medium text-foreground">
                  Платная дорога {mockExpenseDetail.roadNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Vehicle */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <Car className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Транспортное средство</p>
                <p className="font-medium text-foreground">{mockExpenseDetail.vehicleNumber}</p>
              </div>
            </div>
          </div>

          {/* Payment method */}
          <div className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Способ оплаты</p>
                <p className="font-medium text-foreground">{mockExpenseDetail.paymentMethod}</p>
              </div>
            </div>
          </div>

          {/* Mini map placeholder */}
          <div className="bg-secondary rounded-xl h-40 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Карта маршрута</p>
          </div>

          {/* Dispute button */}
          <button className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-warning/10 text-warning rounded-xl font-semibold active:scale-98 transition-transform">
            <AlertTriangle className="w-5 h-5" />
            <span>Оспорить событие</span>
          </button>
        </div>
      </AppLayout>
    );
  }

  // Income detail
  return (
    <AppLayout title="Детали пополнения">
      <div className="p-4 space-y-6">
        {/* Amount */}
        <div className="text-center py-4">
          <p className="text-sm text-muted-foreground mb-1">Пополнено</p>
          <p className="text-4xl font-bold text-success">
            +{mockIncomeDetail.amount.toFixed(2)} <span className="text-2xl">TMT</span>
          </p>
        </div>

        {/* Date and time */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3 text-foreground">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Дата и время</p>
              <p className="font-medium">
                {mockIncomeDetail.date}, {mockIncomeDetail.time}
              </p>
            </div>
          </div>
        </div>

        {/* Payment method */}
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">Способ пополнения</p>
              <p className="font-medium text-foreground">
                {mockIncomeDetail.method} •••• {mockIncomeDetail.cardLast4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TransactionDetail;
