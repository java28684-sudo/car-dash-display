import { useEffect, useState } from 'react';
import carLogo from '@/assets/car-logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const quoteTimer = setTimeout(() => setShowQuote(true), 500);
    const completeTimer = setTimeout(onComplete, 3000);

    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Car Logo */}
        <div className="animate-fade-in">
          <img 
            src={carLogo} 
            alt="Car Logo" 
            className="w-32 h-32 mx-auto animate-glow-pulse"
          />
        </div>

        {/* Quote */}
        <div className={`transition-all duration-1000 ${showQuote ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}>
          <h1 className="text-2xl font-bold text-foreground mb-2 glow-text">
            Welcome to the Future
          </h1>
          <p className="text-lg text-muted-foreground italic">
            "Driving Innovation, Connecting Experiences"
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
            <div className="w-full h-full bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;