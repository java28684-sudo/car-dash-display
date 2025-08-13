import { Phone, Music, MapPin, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navigationItems = [
  { id: 'phone', icon: Phone, path: '/phone', label: 'Phone' },
  { id: 'music', icon: Music, path: '/music', label: 'Music' },
  { id: 'maps', icon: MapPin, path: '/maps', label: 'Maps' },
  { id: 'settings', icon: Settings, path: '/settings', label: 'Settings' },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-card/50 backdrop-blur-md border-r border-border flex flex-col items-center py-6 z-40">
      {/* Logo/Home button */}
      <button
        onClick={() => navigate('/')}
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 ${
          location.pathname === '/' 
            ? 'bg-accent text-accent-foreground shadow-glow' 
            : 'bg-secondary hover:bg-accent/20 text-muted-foreground hover:text-accent'
        }`}
      >
        <div className="w-6 h-6 bg-accent rounded-sm"></div>
      </button>

      {/* Navigation items */}
      <div className="flex flex-col space-y-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group ${
                isActive 
                  ? 'bg-accent text-accent-foreground shadow-glow' 
                  : 'bg-secondary hover:bg-accent/20 text-muted-foreground hover:text-accent'
              }`}
              title={item.label}
            >
              <Icon className={`nav-icon ${isActive ? 'active' : ''}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;