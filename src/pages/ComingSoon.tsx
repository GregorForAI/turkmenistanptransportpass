import { useNavigate } from "react-router-dom";
import { Construction, ChevronLeft } from "lucide-react";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background safe-area-top">
        <div className="flex items-center h-14 px-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-secondary transition-colors"
            aria-label="Назад"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
          <Construction className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Скоро появится
        </h1>
        
        <p className="text-muted-foreground text-base max-w-xs">
          Этот раздел находится в разработке и скоро будет доступен
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium active:scale-98 transition-transform"
        >
          Вернуться назад
        </button>
      </main>
    </div>
  );
};

export default ComingSoon;
