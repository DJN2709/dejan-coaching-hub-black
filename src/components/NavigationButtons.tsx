
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 flex items-center justify-center gap-4">
      <Button
        variant="outline"
        className="gap-2 text-white border-white hover:bg-white/10"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Go Back
      </Button>
      <Link to="/">
        <Button
          variant="outline"
          className="gap-2 text-white border-white hover:bg-white/10"
        >
          <Home className="h-4 w-4" /> Home
        </Button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
