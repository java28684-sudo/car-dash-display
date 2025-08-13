import { useEffect, useState } from 'react';
import { Wifi, Signal, User, Calendar } from 'lucide-react';

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed top-0 left-20 right-0 h-16 bg-card/30 backdrop-blur-md border-b border-border flex items-center justify-between px-6 z-30">
      {/* Left side - Current Time */}
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-foreground glow-text">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Right side - Date, Status, Profile */}
      <div className="flex items-center space-x-6">
        {/* Date */}
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">{formatDate(currentTime)}</span>
        </div>

        {/* Network Status */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <Wifi className="w-4 h-4 text-success" />
            <div className="pulse-dot"></div>
          </div>
          <div className="flex items-center space-x-1">
            <Signal className="w-4 h-4 text-success" />
            <span className="text-xs text-success font-medium">4G</span>
          </div>
        </div>

        {/* User Profile */}
        <button className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent/30 transition-colors">
          <User className="w-5 h-5 text-accent" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;