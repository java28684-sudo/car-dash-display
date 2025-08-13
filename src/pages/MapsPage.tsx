import { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, Search, Route, Clock, Fuel } from 'lucide-react';
import TopBar from '@/components/TopBar';
import NavigationComponent from '@/components/Navigation';

const MapsPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoute, setSelectedRoute] = useState<'fastest' | 'shortest' | 'scenic'>('fastest');

  const nearbyPlaces = [
    { id: 1, name: 'Gas Station', distance: '0.8 km', type: 'fuel', icon: Fuel },
    { id: 2, name: 'Coffee Shop', distance: '1.2 km', type: 'food', icon: MapPin },
    { id: 3, name: 'Parking Garage', distance: '2.1 km', type: 'parking', icon: MapPin },
    { id: 4, name: 'Hospital', distance: '3.5 km', type: 'medical', icon: MapPin },
  ];

  const routeOptions = [
    { id: 'fastest', label: 'Fastest Route', time: '18 min', distance: '12.5 km', traffic: 'Light' },
    { id: 'shortest', label: 'Shortest Route', time: '22 min', distance: '10.8 km', traffic: 'Moderate' },
    { id: 'scenic', label: 'Scenic Route', time: '28 min', distance: '15.2 km', traffic: 'Light' },
  ];

  useEffect(() => {
    // Simulate map initialization
    if (mapRef.current) {
      // In a real implementation, this would initialize Leaflet map
      console.log('Map initialized');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <NavigationComponent />
      
      <main className="pt-16 pl-20 p-6">
        <div className="max-w-7xl mx-auto animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-foreground glow-text">Maps & Navigation</h1>
            
            {/* Search Bar */}
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Map Area */}
            <div className="col-span-8">
              <div className="glass-card p-6 rounded-xl h-[600px]">
                {/* Map Container */}
                <div 
                  ref={mapRef}
                  className="w-full h-full bg-gradient-to-br from-accent/10 to-automotive-purple/10 rounded-lg relative overflow-hidden"
                >
                  {/* Simulated Map Content */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
                  
                  {/* Current Location */}
                  <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-accent rounded-full animate-glow-pulse">
                    <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-accent rounded-full opacity-50 animate-pulse"></div>
                  </div>
                  
                  {/* Destination */}
                  <div className="absolute top-1/4 right-1/4">
                    <MapPin className="w-6 h-6 text-automotive-red drop-shadow-lg" />
                  </div>

                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 200 400 Q 300 250 450 150"
                      stroke="hsl(var(--accent))"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <span className="text-lg font-bold text-foreground">+</span>
                    </button>
                    <button className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <span className="text-lg font-bold text-foreground">-</span>
                    </button>
                  </div>

                  {/* Navigation Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Navigation className="w-6 h-6 text-accent" />
                        <div>
                          <p className="font-semibold text-foreground">Turn right in 800m</p>
                          <p className="text-sm text-muted-foreground">onto Main Street</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">18 min</p>
                        <p className="text-sm text-muted-foreground">12.5 km remaining</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-4 space-y-6">
              {/* Route Options */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Route Options</h3>
                <div className="space-y-3">
                  {routeOptions.map((route) => (
                    <button
                      key={route.id}
                      onClick={() => setSelectedRoute(route.id as any)}
                      className={`w-full p-4 rounded-lg transition-all text-left ${
                        selectedRoute === route.id
                          ? 'bg-accent/20 border border-accent/50'
                          : 'bg-secondary hover:bg-accent/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{route.label}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{route.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{route.distance}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          route.traffic === 'Light' ? 'bg-automotive-green/20 text-automotive-green' :
                          route.traffic === 'Moderate' ? 'bg-automotive-orange/20 text-automotive-orange' :
                          'bg-automotive-red/20 text-automotive-red'
                        }`}>
                          {route.traffic} traffic
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <button className="w-full btn-automotive mt-4">
                  <Navigation className="w-4 h-4 mr-2" />
                  Start Navigation
                </button>
              </div>

              {/* Nearby Places */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Nearby</h3>
                <div className="space-y-3">
                  {nearbyPlaces.map((place) => {
                    const Icon = place.icon;
                    return (
                      <div key={place.id} className="flex items-center space-x-3 p-3 bg-card rounded-lg hover:bg-card/80 transition-colors cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{place.name}</p>
                          <p className="text-sm text-muted-foreground">{place.distance}</p>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/20 flex items-center justify-center transition-colors">
                          <Route className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full btn-automotive">
                    <MapPin className="w-4 h-4 mr-2" />
                    Home
                  </button>
                  <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 transition-colors">
                    <MapPin className="w-4 h-4 mr-2" />
                    Work
                  </button>
                  <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 transition-colors">
                    <Fuel className="w-4 h-4 mr-2" />
                    Find Gas Station
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapsPage;