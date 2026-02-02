import { AppLayout } from "@/components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Radio, 
  Car, 
  CreditCard, 
  Settings, 
  ChevronRight,
  Edit2,
  Plus,
  LogOut
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const userData = {
    phone: "+993 65 123 456",
    email: "user@mail.tm",
    transponder: {
      type: "GEA",
      number: "2323 4561 2342",
      name: "Основной",
    },
    vehicle: {
      model: "Kia Soul",
      plateNumber: "N29 38 AG",
    },
    card: {
      last4: "4532",
      brand: "Visa",
    },
  };

  return (
    <AppLayout title="Личный кабинет" showBack={false}>
      <div className="p-4 space-y-6">
        {/* Contact info */}
        <section>
          <h2 className="section-title">Контактные данные</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="info-row px-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium text-foreground">{userData.phone}</p>
                </div>
              </div>
            </div>
            <div className="info-row px-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Эл. почта</p>
                  <p className="font-medium text-foreground">{userData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transponder */}
        <section>
          <h2 className="section-title">Транспондер</h2>
          {userData.transponder ? (
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <Radio className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {userData.transponder.type}
                    </p>
                    <p className="font-semibold text-foreground">
                      {userData.transponder.number}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {userData.transponder.name}
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-full active:bg-secondary transition-colors">
                  <Edit2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          ) : (
            <button className="w-full bg-card rounded-xl border-2 border-dashed border-border p-6 flex flex-col items-center gap-2 active:border-primary/30 transition-colors">
              <Plus className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Привязать транспондер</span>
            </button>
          )}
        </section>

        {/* Vehicle */}
        <section>
          <h2 className="section-title">Транспортное средство</h2>
          <div className="bg-card rounded-xl border border-border p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {userData.vehicle.model}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {userData.vehicle.plateNumber}
                  </p>
                </div>
              </div>
              <button className="p-2 rounded-full active:bg-secondary transition-colors">
                <Edit2 className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </section>

        {/* Bank card */}
        <section>
          <h2 className="section-title">Привязанная карта</h2>
          {userData.card ? (
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {userData.card.brand} •••• {userData.card.last4}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Для быстрой оплаты
                    </p>
                  </div>
                </div>
                <button className="p-2 rounded-full active:bg-secondary transition-colors">
                  <Edit2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          ) : (
            <button className="w-full bg-card rounded-xl border-2 border-dashed border-border p-6 flex flex-col items-center gap-2 active:border-primary/30 transition-colors">
              <Plus className="w-8 h-8 text-primary" />
              <span className="font-medium text-foreground">Привязать карту</span>
            </button>
          )}
        </section>

        {/* Settings button */}
        <button
          onClick={() => navigate("/settings")}
          className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-foreground">Настройки</span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Logout button */}
        <button
          onClick={() => {
            // Handle logout
            console.log("Logout");
            navigate("/");
          }}
          className="w-full flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-destructive text-destructive font-medium active:scale-98 transition-transform"
        >
          <LogOut className="w-5 h-5" />
          <span>Выйти из аккаунта</span>
        </button>
      </div>
    </AppLayout>
  );
};

export default Profile;
