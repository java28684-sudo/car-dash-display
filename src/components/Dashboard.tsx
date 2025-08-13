import WeatherWidget from './widgets/WeatherWidget';
import MusicWidget from './widgets/MusicWidget';
import CarStatusWidget from './widgets/CarStatusWidget';
import RecentCallsWidget from './widgets/RecentCallsWidget';
import MapPreviewWidget from './widgets/MapPreviewWidget';

const Dashboard = () => {
  return (
    <main className="pt-16 pl-20 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Grid */}
        <div className="grid grid-cols-4 gap-6 animate-fade-in">
          {/* Row 1 */}
          <WeatherWidget />
          <MusicWidget />
          <RecentCallsWidget />
          
          {/* Quick Actions */}
          <div className="widget-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-automotive">
                Start Engine
              </button>
              <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 transition-colors">
                Climate Control
              </button>
              <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 transition-colors">
                Find My Car
              </button>
            </div>
          </div>

          {/* Row 2 - Car Status spans 2 columns */}
          <CarStatusWidget />
          
          {/* Notifications */}
          <div className="widget-card p-6 col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-automotive-blue/10 rounded-lg border border-automotive-blue/20">
                <div className="w-2 h-2 bg-automotive-blue rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Software Update Available</p>
                  <p className="text-xs text-muted-foreground">Infotainment system v2.1.4 is ready to install</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-automotive-orange/10 rounded-lg border border-automotive-orange/20">
                <div className="w-2 h-2 bg-automotive-orange rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Maintenance Reminder</p>
                  <p className="text-xs text-muted-foreground">Next service due in 500 km</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 - Map Preview spans 2 columns */}
          <MapPreviewWidget />
          
          {/* System Stats */}
          <div className="widget-card p-6 col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Status</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-automotive-green">98%</div>
                <div className="text-xs text-muted-foreground">System Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-automotive-blue">4.2GB</div>
                <div className="text-xs text-muted-foreground">Storage Free</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-automotive-orange">35°C</div>
                <div className="text-xs text-muted-foreground">CPU Temp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-automotive-purple">12V</div>
                <div className="text-xs text-muted-foreground">System Voltage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;