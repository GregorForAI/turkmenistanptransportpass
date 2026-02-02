import { Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HelpSection = () => {
  const navigate = useNavigate();

  const handleEmergencyCall = () => {
    window.location.href = "tel:+99312123456";
  };

  const handleSupportChat = () => {
    navigate("/support-chat");
  };

  return (
    <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="section-title">Нужна помощь?</h2>
      <div className="space-y-3">
        <button
          onClick={handleEmergencyCall}
          className="emergency-btn w-full"
          aria-label="Экстренный звонок"
        >
          <Phone className="w-6 h-6" />
          <span className="text-base">Экстренный звонок</span>
        </button>
        <button
          onClick={handleSupportChat}
          className="support-btn w-full"
          aria-label="Чат с поддержкой"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-base">Чат с поддержкой</span>
        </button>
      </div>
    </div>
  );
};
