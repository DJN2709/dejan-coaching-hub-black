
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 right-8 flex gap-4">
      <Button
        variant="outline"
        onClick={() => navigate(-1)}
        className="transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-black text-white border-white"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Go Back
      </Button>
      <Button
        variant="outline"
        onClick={() => navigate("/")}
        className="transform transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-black text-white border-white"
      >
        <Home className="h-4 w-4 mr-2" />
        Home
      </Button>
    </div>
  );
};

export default NavigationButtons;
