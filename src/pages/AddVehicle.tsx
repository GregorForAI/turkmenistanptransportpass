import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { Car, Bike, Truck, Bus, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type VehicleType = "car" | "motorcycle" | "truck" | "bus";

const vehicleTypes = [
  { id: "car" as const, label: "Легковой", icon: Car },
  { id: "motorcycle" as const, label: "Мотоцикл", icon: Bike },
  { id: "truck" as const, label: "Грузовой", icon: Truck },
  { id: "bus" as const, label: "Автобус", icon: Bus },
];

const AddVehicle = () => {
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState<VehicleType>("car");
  const [plateNumber, setPlateNumber] = useState("");
  const [model, setModel] = useState("");
  const [transponderNumber, setTransponderNumber] = useState("");

  const handleSubmit = () => {
    // Mock submit
    console.log({ vehicleType, plateNumber, model, transponderNumber });
    navigate(-1);
  };

  const isValid = plateNumber.length > 0 && model.length > 0;

  return (
    <AppLayout title="Добавить ТС" showNotifications={false}>
      <div className="p-4 space-y-6">
        {/* Vehicle type selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Тип транспортного средства
          </label>
          <div className="grid grid-cols-4 gap-2">
            {vehicleTypes.map((type) => {
              const Icon = type.icon;
              const isActive = vehicleType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setVehicleType(type.id)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 p-3 rounded-xl border-2 transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border text-foreground active:border-primary/30"
                  )}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Model */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Марка и модель
          </label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Например: Kia Soul"
            className="w-full p-4 bg-card border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Plate number */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Государственный номер
          </label>
          <input
            type="text"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
            placeholder="N29 38 AG"
            className="w-full p-4 bg-card border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors uppercase"
          />
        </div>

        {/* Transponder (optional) */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Номер транспондера <span className="text-muted-foreground">(необязательно)</span>
          </label>
          <input
            type="text"
            value={transponderNumber}
            onChange={(e) => setTransponderNumber(e.target.value.toUpperCase())}
            placeholder="GEA 2323 4561 2342"
            className="w-full p-4 bg-card border-2 border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Вы можете привязать транспондер позже в настройках
          </p>
        </div>

        {/* Submit button */}
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={cn(
              "w-full flex items-center justify-center gap-2 p-4 rounded-xl font-semibold transition-all",
              isValid
                ? "bg-primary text-primary-foreground active:scale-98"
                : "bg-secondary text-muted-foreground cursor-not-allowed"
            )}
          >
            <Check className="w-5 h-5" />
            <span>Добавить транспортное средство</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default AddVehicle;
