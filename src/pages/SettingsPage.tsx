import { useState } from 'react';
import { Monitor, Moon, Sun, Volume2, Wifi, Bluetooth, Bell, Lock, User, Car } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Navigation from '@/components/Navigation';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: 'dark',
    volume: 75,
    brightness: 60,
    notifications: true,
    bluetooth: true,
    wifi: true,
    autoLock: true,
    voiceControl: true,
    mapVoice: true,
    phoneSync: true,
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const settingSections = [
    {
      title: 'Display & Theme',
      icon: Monitor,
      items: [
        {
          id: 'theme',
          label: 'Theme',
          type: 'select',
          value: settings.theme,
          options: [
            { value: 'dark', label: 'Dark Mode', icon: Moon },
            { value: 'light', label: 'Light Mode', icon: Sun },
            { value: 'auto', label: 'Auto', icon: Monitor },
          ],
        },
        {
          id: 'brightness',
          label: 'Brightness',
          type: 'slider',
          value: settings.brightness,
          min: 0,
          max: 100,
        },
      ],
    },
    {
      title: 'Audio',
      icon: Volume2,
      items: [
        {
          id: 'volume',
          label: 'Master Volume',
          type: 'slider',
          value: settings.volume,
          min: 0,
          max: 100,
        },
        {
          id: 'voiceControl',
          label: 'Voice Control',
          type: 'toggle',
          value: settings.voiceControl,
        },
        {
          id: 'mapVoice',
          label: 'Navigation Voice',
          type: 'toggle',
          value: settings.mapVoice,
        },
      ],
    },
    {
      title: 'Connectivity',
      icon: Wifi,
      items: [
        {
          id: 'wifi',
          label: 'Wi-Fi',
          type: 'toggle',
          value: settings.wifi,
        },
        {
          id: 'bluetooth',
          label: 'Bluetooth',
          type: 'toggle',
          value: settings.bluetooth,
        },
        {
          id: 'phoneSync',
          label: 'Phone Sync',
          type: 'toggle',
          value: settings.phoneSync,
        },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      items: [
        {
          id: 'autoLock',
          label: 'Auto Lock',
          type: 'toggle',
          value: settings.autoLock,
        },
        {
          id: 'notifications',
          label: 'Notifications',
          type: 'toggle',
          value: settings.notifications,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      
      <main className="pt-16 pl-20 p-6">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-8 glow-text">Settings</h1>
          
          <div className="grid grid-cols-12 gap-8">
            {/* Settings Sections */}
            <div className="col-span-8 space-y-6">
              {settingSections.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <div key={section.title} className="glass-card p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <SectionIcon className="w-5 h-5 text-accent" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-card rounded-lg">
                          <label className="text-foreground font-medium">{item.label}</label>
                          
                          <div className="flex items-center space-x-4">
                            {item.type === 'toggle' && (
                              <button
                                onClick={() => updateSetting(item.id, !item.value)}
                                className={`relative w-12 h-6 rounded-full transition-colors ${
                                  item.value ? 'bg-accent' : 'bg-muted'
                                }`}
                              >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                  item.value ? 'translate-x-7' : 'translate-x-1'
                                }`} />
                              </button>
                            )}

                            {item.type === 'slider' && (
                              <div className="flex items-center space-x-3 w-48">
                                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-accent transition-all duration-200"
                                    style={{ width: `${item.value}%` }}
                                  />
                                </div>
                                <span className="text-sm text-muted-foreground w-10 text-right">
                                  {item.value}%
                                </span>
                              </div>
                            )}

                            {item.type === 'select' && (
                              <div className="flex space-x-2">
                                {item.options?.map((option) => {
                                  const OptionIcon = option.icon;
                                  return (
                                    <button
                                      key={option.value}
                                      onClick={() => updateSetting(item.id, option.value)}
                                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                                        item.value === option.value
                                          ? 'bg-accent text-accent-foreground'
                                          : 'bg-secondary hover:bg-accent/20 text-muted-foreground'
                                      }`}
                                    >
                                      <OptionIcon className="w-4 h-4" />
                                      <span className="text-sm">{option.label}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile & System Info */}
            <div className="col-span-4 space-y-6">
              {/* User Profile */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <User className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Profile</h3>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground">John Driver</h4>
                  <p className="text-sm text-muted-foreground">Premium Member</p>
                </div>

                <button className="w-full btn-automotive">
                  Edit Profile
                </button>
              </div>

              {/* Vehicle Info */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Vehicle</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Model</span>
                    <span className="text-foreground font-medium">Tesla Model S</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year</span>
                    <span className="text-foreground font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">VIN</span>
                    <span className="text-foreground font-medium">5YJ3E1EA...2846</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Range</span>
                    <span className="text-foreground font-medium">420 km</span>
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">System</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Software Version</span>
                    <span className="text-foreground font-medium">v2.1.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage Used</span>
                    <span className="text-foreground font-medium">2.8 / 8 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Update</span>
                    <span className="text-foreground font-medium">2 days ago</span>
                  </div>
                </div>

                <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg px-4 py-2 transition-colors mt-4">
                  Check for Updates
                </button>
              </div>

              {/* Emergency */}
              <div className="glass-card p-6 rounded-xl border border-automotive-red/30">
                <h3 className="text-lg font-semibold text-automotive-red mb-4">Emergency</h3>
                <button className="w-full bg-automotive-red hover:bg-automotive-red/90 text-white rounded-lg px-4 py-2 transition-colors">
                  Emergency Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;