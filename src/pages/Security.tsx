import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Lock, Fingerprint, ScanFace, HelpCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Security = () => {
  const [pinEnabled, setPinEnabled] = useState(true);
  const [touchIdEnabled, setTouchIdEnabled] = useState(false);
  const [faceIdEnabled, setFaceIdEnabled] = useState(false);

  return (
    <AppLayout title="Безопасность">
      <div className="p-4 space-y-4">
        {/* Info banner */}
        <div className="bg-primary/10 rounded-xl p-4 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            Настройте дополнительную защиту для входа в приложение. 
            Это защитит ваши данные, если телефон попадёт в чужие руки.
          </p>
        </div>

        {/* PIN code */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="setting-row">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-medium text-foreground">PIN-код</span>
                <p className="text-sm text-muted-foreground">
                  4-значный код для входа
                </p>
              </div>
            </div>
            <Switch
              checked={pinEnabled}
              onCheckedChange={setPinEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>
          {pinEnabled && (
            <button className="mt-3 w-full py-3 text-center text-primary font-medium active:opacity-70 transition-opacity">
              Изменить PIN-код
            </button>
          )}
        </div>

        {/* Touch ID */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="setting-row">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Fingerprint className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-medium text-foreground">Touch ID</span>
                <p className="text-sm text-muted-foreground">
                  Вход по отпечатку пальца
                </p>
              </div>
            </div>
            <Switch
              checked={touchIdEnabled}
              onCheckedChange={setTouchIdEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        {/* Face ID */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="setting-row">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <ScanFace className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="font-medium text-foreground">Face ID</span>
                <p className="text-sm text-muted-foreground">
                  Вход по лицу
                </p>
              </div>
            </div>
            <Switch
              checked={faceIdEnabled}
              onCheckedChange={setFaceIdEnabled}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-6 px-2">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Совет:</strong> Включите хотя бы один способ защиты. 
            Если вы забудете PIN-код, можно будет восстановить доступ через SMS.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Security;
