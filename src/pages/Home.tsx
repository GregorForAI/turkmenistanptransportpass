import { AppLayout } from "@/components/layout/AppLayout";
import { BalanceCard } from "@/components/home/BalanceCard";
import { QuickActions } from "@/components/home/QuickActions";
import { VehicleCard } from "@/components/home/VehicleCard";
import { HelpSection } from "@/components/home/HelpSection";

const Home = () => {
  // Mock data - would come from API/state
  const balance = 2450.50;
  const vehicle = {
    id: "1",
    model: "Kia Soul",
    plateNumber: "N29 38 AG",
    transponderNumber: "GEA 2323 4561 2342",
  };

  return (
    <AppLayout title="Транспорт TM" showBack={false}>
      <div className="p-4 space-y-6">
        <BalanceCard balance={balance} />
        <QuickActions />
        <VehicleCard vehicle={vehicle} />
        <HelpSection />
      </div>
    </AppLayout>
  );
};

export default Home;
