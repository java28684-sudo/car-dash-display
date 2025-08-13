import { MapPin, Navigation, Clock } from 'lucide-react';

const MapPreviewWidget = () => {
  const routeInfo = {
    destination: 'Downtown Office',
    distance: '12.5 km',
    eta: '18 min',
    traffic: 'Light traffic'
  };

  return (
    <div className="widget-card p-6 cursor-pointer col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
        <div className="flex items-center space-x-2">
          <div className="pulse-dot"></div>
          <span className="text-xs text-success font-medium">GPS</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Map Preview */}
        <div className="flex-1 h-24 bg-gradient-to-br from-accent/20 to-automotive-purple/20 rounded-lg relative overflow-hidden">
          {/* Simulated map with route */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
          
          {/* Current location dot */}
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-accent rounded-full animate-glow-pulse">
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
          </div>
          
          {/* Destination marker */}
          <div className="absolute top-4 right-4">
            <MapPin className="w-4 h-4 text-automotive-red" />
          </div>

          {/* Route line simulation */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 16 20 Q 30 10 50 16"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 2"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Route Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Navigation className="w-4 h-4 text-accent" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {routeInfo.destination}
              </p>
              <p className="text-xs text-muted-foreground">
                {routeInfo.distance}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-automotive-orange" />
            <div>
              <p className="text-sm font-medium text-foreground">
                {routeInfo.eta}
              </p>
              <p className="text-xs text-automotive-green">
                {routeInfo.traffic}
              </p>
            </div>
          </div>

          <button className="btn-automotive text-sm px-4 py-2">
            Navigate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapPreviewWidget;