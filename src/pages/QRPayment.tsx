import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Scan, Flashlight, ImageIcon } from "lucide-react";

const QRPayment = () => {
  const [flashOn, setFlashOn] = useState(false);

  return (
    <AppLayout title="Оплата по QR" showNotifications={false}>
      <div className="flex flex-col h-full">
        {/* Camera viewport */}
        <div className="flex-1 relative bg-foreground/90 flex items-center justify-center">
          {/* Simulated camera view */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground/80" />
          
          {/* Scan frame */}
          <div className="relative z-10 w-64 h-64">
            {/* Corner borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-lg" />
            
            {/* Scanning line animation */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-primary animate-pulse" 
                 style={{ 
                   animation: "scan 2s ease-in-out infinite",
                 }} 
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-primary-foreground text-lg font-medium">
              Наведите камеру на QR-код
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">
              Код будет отсканирован автоматически
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-background p-6">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => setFlashOn(!flashOn)}
              className="flex flex-col items-center gap-2 p-4"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                flashOn ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
              }`}>
                <Flashlight className="w-6 h-6" />
              </div>
              <span className="text-sm text-foreground">
                {flashOn ? "Выкл" : "Вкл"}
              </span>
            </button>

            <button className="flex flex-col items-center gap-2 p-4">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-sm text-foreground">Галерея</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(220px); opacity: 0.5; }
        }
      `}</style>
    </AppLayout>
  );
};

export default QRPayment;
