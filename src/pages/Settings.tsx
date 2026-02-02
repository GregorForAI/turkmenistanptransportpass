import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { 
  Nfc, 
  Globe, 
  Bell, 
  Key, 
  Shield, 
  ChevronRight,
  HelpCircle
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const languages = [
  { code: "ru", label: "Русский" },
  { code: "tk", label: "Türkmen" },
  { code: "en", label: "English" },
];

const Settings = () => {
  const navigate = useNavigate();
  const [nfcEnabled, setNfcEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("ru");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  return (
    <AppLayout title="Настройки">
      <div className="p-4 space-y-4">
        {/* NFC Payment */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="setting-row">
            <div className="flex items-center gap-3">
              <Nfc className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">NFC-оплата</span>
                  <button className="group relative">
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity whitespace-nowrap z-10">
                      Оплата прикосновением телефона
                    </span>
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Оплата прикосновением
                </p>
              </div>
            </div>
            <Switch
              checked={nfcEnabled}
              onCheckedChange={setNfcEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        {/* Language */}
        <div className="bg-card rounded-xl border border-border overflow-hidden relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="w-full setting-row px-4 active:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="font-medium text-foreground">Язык</span>
                <p className="text-sm text-muted-foreground">
                  {languages.find(l => l.code === selectedLanguage)?.label}
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
          
          {showLanguageDropdown && (
            <div className="border-t border-border">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setShowLanguageDropdown(false);
                  }}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary transition-colors border-b border-border last:border-b-0"
                >
                  <span className="text-foreground">{lang.label}</span>
                  {selectedLanguage === lang.code && (
                    <span className="text-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Push notifications */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="setting-row">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <div>
                <span className="font-medium text-foreground">Push-уведомления</span>
                <p className="text-sm text-muted-foreground">
                  О списаниях и пополнениях
                </p>
              </div>
            </div>
            <Switch
              checked={pushEnabled}
              onCheckedChange={setPushEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        {/* Change password */}
        <button
          onClick={() => navigate("/change-password")}
          className="w-full bg-card rounded-xl border border-border p-4 active:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Сменить пароль</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </button>

        {/* Security */}
        <button
          onClick={() => navigate("/security")}
          className="w-full bg-card rounded-xl border border-border p-4 active:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <div className="text-left">
                <span className="font-medium text-foreground">Безопасность</span>
                <p className="text-sm text-muted-foreground">
                  PIN-код, Touch ID, Face ID
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </button>
      </div>
    </AppLayout>
  );
};

export default Settings;
