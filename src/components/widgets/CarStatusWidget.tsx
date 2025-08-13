import { useState, useEffect } from 'react';
import { Battery, Lock, Unlock, Zap } from 'lucide-react';
import carSideView from '@/assets/car-side-view.png';

interface CarStatus {
  speed: number;
  gear: string;
  batteryLevel: number;
  range: number;
  isLocked: boolean;
  isCharging: boolean;
}

const CarStatusWidget = () => {
  const [carStatus, setCarStatus] = useState<CarStatus>({
    speed: 0,
    gear: 'P',
    batteryLevel: 85,
    range: 420,
    isLocked: true,
    isCharging: false
  });

  useEffect(() => {
    // Simulate live car data updates
    const interval = setInterval(() => {
      setCarStatus(prev => ({
        ...prev,
        speed: prev.gear === 'P' ? 0 : Math.floor(Math.random() * 80),
        batteryLevel: Math.max(20, prev.batteryLevel + (Math.random() - 0.5) * 2),
        range: Math.floor(400 + Math.random() * 50)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const gearOptions = ['P', 'R', 'N', 'D'];
  
  return (
    <div className="widget-card p-6 cursor-pointer col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Vehicle Status</h3>
        <div className="flex items-center space-x-2">
          <div className="pulse-dot"></div>
          <span className="text-xs text-success font-medium">LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Car Visual */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src={carSideView} 
              alt="Car" 
              className="w-32 h-16 object-contain filter brightness-110"
            />
            {carStatus.isCharging && (
              <Zap className="absolute -top-2 -right-2 w-4 h-4 text-automotive-orange animate-pulse" />
            )}
          </div>
          <div className="mt-2 flex items-center space-x-2">
            <button 
              onClick={() => setCarStatus(prev => ({ ...prev, isLocked: !prev.isLocked }))}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                carStatus.isLocked 
                  ? 'bg-automotive-red/20 text-automotive-red' 
                  : 'bg-automotive-green/20 text-automotive-green'
              }`}
            >
              {carStatus.isLocked ? (
                <Lock className="w-4 h-4" />
              ) : (
                <Unlock className="w-4 h-4" />
              )}
            </button>
            <span className="text-xs text-muted-foreground">
              {carStatus.isLocked ? 'Locked' : 'Unlocked'}
            </span>
          </div>
        </div>

        {/* Speed and Gear */}
        <div className="text-center">
          <div className="text-4xl font-bold text-foreground glow-text mb-2">
            {carStatus.speed}
          </div>
          <div className="text-sm text-muted-foreground mb-4">km/h</div>
          
          <div className="flex justify-center space-x-1">
            {gearOptions.map((gear) => (
              <button
                key={gear}
                onClick={() => setCarStatus(prev => ({ ...prev, gear }))}
                className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all ${
                  carStatus.gear === gear
                    ? 'bg-accent text-accent-foreground shadow-glow'
                    : 'bg-secondary text-muted-foreground hover:bg-accent/20'
                }`}
              >
                {gear}
              </button>
            ))}
          </div>
        </div>

        {/* Battery and Range */}
        <div className="space-y-4">
          {/* Battery */}
          <div className="flex items-center space-x-3">
            <Battery className={`w-5 h-5 ${
              carStatus.batteryLevel > 50 
                ? 'text-automotive-green' 
                : carStatus.batteryLevel > 20 
                  ? 'text-automotive-orange' 
                  : 'text-automotive-red'
            }`} />
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Battery</span>
                <span className="text-foreground font-medium">{Math.round(carStatus.batteryLevel)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    carStatus.batteryLevel > 50 
                      ? 'bg-automotive-green' 
                      : carStatus.batteryLevel > 20 
                        ? 'bg-automotive-orange' 
                        : 'bg-automotive-red'
                  }`}
                  style={{ width: `${carStatus.batteryLevel}%` }}
                />
              </div>
            </div>
          </div>

          {/* Range */}
          <div className="text-center p-3 bg-secondary/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">{carStatus.range}</div>
            <div className="text-xs text-muted-foreground">km range</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarStatusWidget;