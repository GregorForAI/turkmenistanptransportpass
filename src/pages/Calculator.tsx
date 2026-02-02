import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { ChevronDown, Sun, Moon, Bike, Car, Truck, Bus } from "lucide-react";
import { cn } from "@/lib/utils";

type VehicleCategory = "motorcycle" | "car" | "truck" | "bus";
type TimeOfDay = "day" | "night";

const vehicleCategories = [
  { id: "motorcycle" as const, label: "Мотоцикл", icon: Bike },
  { id: "car" as const, label: "Легковой", icon: Car },
  { id: "truck" as const, label: "Грузовой", icon: Truck },
  { id: "bus" as const, label: "Автобус", icon: Bus },
];

const entryPoints = [
  "Ашхабад",
  "Мары",
  "Туркменабат",
  "Дашогуз",
  "Балканабат",
];

const Calculator = () => {
  const [entryPoint, setEntryPoint] = useState("");
  const [exitPoint, setExitPoint] = useState("");
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>("car");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");
  const [showEntryDropdown, setShowEntryDropdown] = useState(false);
  const [showExitDropdown, setShowExitDropdown] = useState(false);

  // Mock calculation
  const cashPrice = entryPoint && exitPoint ? 25.00 : 0;
  const onlinePrice = entryPoint && exitPoint ? 20.00 : 0;
  const savings = cashPrice - onlinePrice;

  return (
    <AppLayout title="Тарифный калькулятор" showBack={false}>
      <div className="p-4 space-y-4">
        {/* Entry point */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-2">
            Пункт въезда
          </label>
          <button
            onClick={() => setShowEntryDropdown(!showEntryDropdown)}
            className="w-full flex items-center justify-between p-4 bg-card border-2 border-border rounded-xl text-left active:border-primary/30 transition-colors"
          >
            <span className={cn(entryPoint ? "text-foreground" : "text-muted-foreground")}>
              {entryPoint || "Выберите пункт"}
            </span>
            <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform", showEntryDropdown && "rotate-180")} />
          </button>
          {showEntryDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-10 overflow-hidden">
              {entryPoints.map((point) => (
                <button
                  key={point}
                  onClick={() => {
                    setEntryPoint(point);
                    setShowEntryDropdown(false);
                  }}
                  className="w-full p-4 text-left text-foreground hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  {point}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Exit point */}
        <div className="relative">
          <label className="block text-sm font-medium text-foreground mb-2">
            Пункт выезда
          </label>
          <button
            onClick={() => setShowExitDropdown(!showExitDropdown)}
            className="w-full flex items-center justify-between p-4 bg-card border-2 border-border rounded-xl text-left active:border-primary/30 transition-colors"
          >
            <span className={cn(exitPoint ? "text-foreground" : "text-muted-foreground")}>
              {exitPoint || "Выберите пункт"}
            </span>
            <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform", showExitDropdown && "rotate-180")} />
          </button>
          {showExitDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-10 overflow-hidden">
              {entryPoints.filter(p => p !== entryPoint).map((point) => (
                <button
                  key={point}
                  onClick={() => {
                    setExitPoint(point);
                    setShowExitDropdown(false);
                  }}
                  className="w-full p-4 text-left text-foreground hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  {point}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Vehicle category */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Категория ТС
          </label>
          <div className="grid grid-cols-4 gap-2">
            {vehicleCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = vehicleCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setVehicleCategory(cat.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 p-3 rounded-xl border-2 transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground active:border-primary/30"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time of day */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Время суток
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setTimeOfDay("day")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-medium transition-colors",
                timeOfDay === "day"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground active:border-primary/30"
              )}
            >
              <Sun className="w-5 h-5" />
              <span>День</span>
            </button>
            <button
              onClick={() => setTimeOfDay("night")}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 font-medium transition-colors",
                timeOfDay === "night"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground active:border-primary/30"
              )}
            >
              <Moon className="w-5 h-5" />
              <span>Ночь</span>
            </button>
          </div>
        </div>

        {/* Result */}
        {entryPoint && exitPoint && (
          <div className="mt-6 space-y-3 animate-fade-in">
            <div className="bg-card rounded-xl p-4 border border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Наличными</span>
                <span className="text-xl font-bold text-foreground">{cashPrice.toFixed(2)} TMT</span>
              </div>
            </div>
            
            <div className="bg-primary rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-primary-foreground/80">Онлайн-оплата</span>
                <span className="text-xl font-bold text-primary-foreground">{onlinePrice.toFixed(2)} TMT</span>
              </div>
            </div>

            <div className="rounded-xl p-4 text-center border-2 border-dashed border-primary/30 bg-primary/5">
              <p className="text-muted-foreground text-sm mb-1">Ваша экономия при онлайн-оплате</p>
              <p className="text-primary font-bold text-2xl">
                {savings.toFixed(2)} TMT
              </p>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default Calculator;
