import { CreditCard, MessageSquare, Ticket, Building2, ChevronRight, HelpCircle } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useNavigate } from "react-router-dom";

const paymentMethods = [
  {
    id: "card",
    icon: CreditCard,
    title: "Банковская карта",
    description: "Visa, Mastercard, Humo",
    hint: "Быстрое пополнение с карты",
  },
  {
    id: "sms",
    icon: MessageSquare,
    title: "Через SMS",
    description: "С баланса телефона",
    hint: "Отправьте SMS и получите код",
  },
  {
    id: "scratch",
    icon: Ticket,
    title: "Скретч-карта",
    description: "Введите код с карты",
    hint: "Купите карту в любом магазине",
  },
  {
    id: "terminal",
    icon: Building2,
    title: "Через терминал",
    description: "Оплата наличными",
    hint: "Найдите ближайший терминал",
  },
];

const TopUp = () => {
  const navigate = useNavigate();

  const handleMethodSelect = (methodId: string) => {
    navigate(`/topup/${methodId}`);
  };

  return (
    <AppLayout title="Пополнение баланса">
      <div className="p-4 space-y-4">
        <p className="text-sm text-muted-foreground mb-2">
          Выберите удобный способ пополнения
        </p>

        <div className="space-y-3">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                onClick={() => handleMethodSelect(method.id)}
                className="payment-method w-full animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-base font-semibold text-foreground">
                    {method.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Help section */}
        <div className="mt-6 p-4 bg-secondary rounded-xl">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Не знаете как пополнить?
              </p>
              <p className="text-sm text-muted-foreground">
                Позвоните на горячую линию или напишите в чат — мы поможем!
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TopUp;
