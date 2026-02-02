import { Car, Plus, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Vehicle {
  id: string;
  model: string;
  plateNumber: string;
  transponderNumber: string;
}

interface VehicleCardProps {
  vehicle?: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate();

  if (!vehicle) {
    return (
      <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="section-title">Моё транспортное средство</h2>
        <button
          onClick={() => navigate("/add-vehicle")}
          className="vehicle-card w-full flex items-center justify-center gap-3 py-8 active:scale-98 transition-transform"
        >
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
            <Plus className="w-6 h-6 text-primary" />
          </div>
          <span className="text-base font-medium text-foreground">
            Добавить транспортное средство
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <h2 className="section-title">Моё транспортное средство</h2>
      <button
        onClick={() => navigate(`/vehicle/${vehicle.id}`)}
        className="vehicle-card w-full text-left active:scale-98 transition-transform"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
            <Car className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-foreground mb-1">
              {vehicle.model}
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              Номер ТС: <span className="font-medium text-foreground">{vehicle.plateNumber}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Транспондер: <span className="font-medium text-foreground">{vehicle.transponderNumber}</span>
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
        </div>
      </button>
      <button
        onClick={() => navigate("/add-vehicle")}
        className="w-full mt-3 flex items-center justify-center gap-2 py-3 text-primary font-medium active:opacity-70 transition-opacity"
      >
        <Plus className="w-5 h-5" />
        <span>Добавить ещё</span>
      </button>
    </div>
  );
};
